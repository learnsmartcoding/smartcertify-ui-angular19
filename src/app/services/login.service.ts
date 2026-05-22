import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  MsalService,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MSAL_GUARD_CONFIG,
} from '@azure/msal-angular';
import {
  EventMessage,
  AuthenticationResult,
  InteractionStatus,
  EventType,
  InteractionType,
  PopupRequest,
  PromptValue,
  RedirectRequest,
} from '@azure/msal-browser';
import { filter } from 'rxjs/operators';


import { createClaimsTable } from '../claim-utils';
import { Claim } from '../models/claim';
import { loginRequest } from '../auth.config';
import { CurrentUserService } from './current-user.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private claimsSubject = new BehaviorSubject<Claim[]>([]);
  claims$ = this.claimsSubject.asObservable();
  private userIdSubject = new BehaviorSubject<number>(0);
  userId$ = this.userIdSubject.asObservable();
  loginDisplay = false;
  isLoggedIn = false;
  displayedColumns: string[] = ['claim', 'value', 'description'];
  userName!: string;
  userId!: number;
  userRoles: string[] = [];
  
  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private currentUserService: CurrentUserService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration
  ) {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        if (payload.account) {
          this.authService.instance.setActiveAccount(payload.account);
          this.getClaims(payload.account.idTokenClaims);
        }
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        const claims =
          this.authService.instance.getActiveAccount()?.idTokenClaims;
        this.getClaims(claims);
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    this.isLoggedIn = this.loginDisplay;
  }

  refreshFromMsal(): void {
    let activeAccount = this.authService.instance.getActiveAccount();
    const accounts = this.authService.instance.getAllAccounts();

    if (!activeAccount && accounts.length > 0) {
      activeAccount = accounts[0];
      this.authService.instance.setActiveAccount(activeAccount);
    }

    this.setLoginDisplay();
    this.getClaims(activeAccount?.idTokenClaims);
  }

  getClaims(claims: any) {
    
    if (claims) {
      const claimsTable: Claim[] = createClaimsTable(claims);
      this.claimsSubject.next([...claimsTable]);

      const userIdClaim = claimsTable.find((f) =>
        ['extension_userId', 'userId', 'user_id'].includes(f.claim)
      );

      const roleClaims = claims.roles ?? claims.extension_userRoles ?? claims.role;
      if (Array.isArray(roleClaims)) {
        this.userRoles = roleClaims;
      } else if (typeof roleClaims === 'string') {
        this.userRoles = roleClaims.split(',');
      } else {
        this.userRoles = [];
      }

      if (userIdClaim) {
        this.userIdSubject.next(+userIdClaim.value);
        this.userId = +userIdClaim.value;
      }
      const givenName = claimsTable.find((s) => s.claim === 'given_name')?.value;
      const familyName = claimsTable.find((s) => s.claim === 'family_name')?.value;
      const displayName =
        claimsTable.find((s) => s.claim === 'name')?.value ??
        claimsTable.find((s) => s.claim === 'preferred_username')?.value ??
        claimsTable.find((s) => s.claim === 'email')?.value ??
        '';
      this.userName =
        givenName || familyName ? [givenName, familyName].filter(Boolean).join(', ') : displayName;
    } else {
      this.userIdSubject.next(0);
      this.userId = 0;
      this.claimsSubject.next([]); // No claims available
      this.userRoles = [];
    }
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {
    userFlowRequest ??= {
      prompt: PromptValue.LOGIN,
      scopes: loginRequest.scopes,
    };

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService
          .loginPopup({
            ...this.msalGuardConfig.authRequest,
            ...userFlowRequest,
          } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService
          .loginPopup(userFlowRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({
          ...this.msalGuardConfig.authRequest,
          ...userFlowRequest,
        } as RedirectRequest);
      } else {
        this.authService.loginRedirect(userFlowRequest);
      }
    }
  }

  logout() {
    const activeAccount =
      this.authService.instance.getActiveAccount() ||
      this.authService.instance.getAllAccounts()[0];

    this.currentUserService.clear();

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        account: activeAccount,
      });
    } else {
      this.authService.logoutRedirect({
        account: activeAccount,
      });
    }
  }
}
