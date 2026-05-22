import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BehaviorSubject, Observable, finalize, map, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrentUserBootstrapModel } from '../models/current-user-bootstrap';

const MOCK_CURRENT_USER: CurrentUserBootstrapModel = {
  userId: 1,
  displayName: 'Mock SmartCertify User',
  firstName: 'Mock',
  lastName: 'User',
  email: 'mock.user@smartcertify.local',
  profileImageUrl: '',
  roles: [],
};

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private readonly currentUserSubject = new BehaviorSubject<CurrentUserBootstrapModel | null>(null);
  private bootstrapRequest$?: Observable<CurrentUserBootstrapModel>;

  readonly currentUser$ = this.currentUserSubject.asObservable();
  readonly userId$ = this.currentUser$.pipe(map((user) => user?.userId ?? 0));
  readonly roles$ = this.currentUser$.pipe(map((user) => user?.roles ?? []));

  constructor(
    private http: HttpClient,
    private msalService: MsalService
  ) {}

  get currentUser(): CurrentUserBootstrapModel | null {
    return this.currentUserSubject.value;
  }

  get userId(): number {
    return this.currentUser?.userId ?? 0;
  }

  get roles(): string[] {
    return this.currentUser?.roles?.map((role) => role.roleName) ?? [];
  }

  hasRole(roleName: string): boolean {
    return this.roles.some((role) => role.toLowerCase() === roleName.toLowerCase());
  }

  loadCurrentUser(forceRefresh = false): Observable<CurrentUserBootstrapModel> {
    if (!forceRefresh && this.currentUser) {
      return of(this.currentUser);
    }

    if (!forceRefresh && this.bootstrapRequest$) {
      return this.bootstrapRequest$;
    }

    // // Temporary UI-side mock while the API bootstrap endpoint is returning 401.
    // // Restore the HTTP call below once /User/bootstrap is fixed server-side.
    // this.bootstrapRequest$ = of(MOCK_CURRENT_USER).pipe(
    //   tap((user) => this.currentUserSubject.next(user))
    // );

    this.bootstrapRequest$ = this.http
      .get<CurrentUserBootstrapModel>(`${environment.apiUrl}/User/bootstrap`)
      .pipe(
        tap((user) => this.currentUserSubject.next(user)),
        finalize(() => {
          this.bootstrapRequest$ = undefined;
        }),
        shareReplay(1)
      );

    return this.bootstrapRequest$;
  }

  loadIfAuthenticated(forceRefresh = false): Observable<CurrentUserBootstrapModel | null> {
    const hasAccount =
      !!this.msalService.instance.getActiveAccount() ||
      this.msalService.instance.getAllAccounts().length > 0;

    if (!hasAccount) {
      this.clear();
      return of(null);
    }

    return this.loadCurrentUser(forceRefresh);
  }

  clear(): void {
    this.currentUserSubject.next(null);
    this.bootstrapRequest$ = undefined;
  }
}
