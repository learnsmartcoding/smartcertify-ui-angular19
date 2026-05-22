import { ChangeDetectorRef, Component, Inject, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService,
  MsalBroadcastService,
} from '@azure/msal-angular';
import {
  EventMessage,
  EventType,
  InteractionStatus,
  RedirectRequest,
  PopupRequest,
  AuthenticationResult,
  InteractionType,
} from '@azure/msal-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Claim } from '../../models/claim';
import { LoginService } from '../../services/login.service';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isIframe = false;
  loginDisplay = false;
  isAdmin = false;
  private readonly _destroying$ = new Subject<void>();
  claims: Claim[] = [];
  profilePictureUrl = '';
  profileImageFailed = false;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private loginService: LoginService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentUserService.currentUser$
      .pipe(takeUntil(this._destroying$))
      .subscribe((user) => {
        this.ngZone.run(() => {
          this.profilePictureUrl = user?.profileImageUrl?.trim() ?? '';
          this.profileImageFailed = false;
          this.isAdmin =
            user?.roles?.some(
              (role) => role.roleName.toLowerCase() === 'admin'
            ) ?? false;
          this.changeDetectorRef.detectChanges();
        });
      });

    this.getUserInfo();
    setInterval(() => {
      this.getUserInfo();
    }, 300000);

    this.authService
      .handleRedirectObservable()
      .subscribe((result: AuthenticationResult | null) => {
        if (result) {
          const redirectStartPage = localStorage.getItem('redirectStartPage'); // Retrieve the URL from local storage
          if (redirectStartPage) {
            this.router.navigate([redirectStartPage]);
            localStorage.removeItem('redirectStartPage'); // Clear the URL from local storage
          }
        }
      });

    //this.authService.handleRedirectObservable().subscribe();
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

    this.setLoginDisplay();

    //To subscribe for claims
    this.loginService.claims$.subscribe((c) => {
      this.claims = c;
    });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  loginRedirect() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  loginPopup() {
    if (this.msalGuardConfig.authRequest) {
      this.authService
        .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });
    } else {
      this.authService
        .loginPopup()
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });
    }
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  editProfile() {
    this.router.navigate(['/user/update-profile']);
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {
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

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  getUserInfo() {
    this.currentUserService.loadIfAuthenticated().subscribe((user) => {
      this.ngZone.run(() => {
        this.profilePictureUrl = user?.profileImageUrl?.trim() ?? '';
        this.profileImageFailed = false;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  onProfileImageError(): void {
    this.profileImageFailed = true;
    this.profilePictureUrl = '';
    this.changeDetectorRef.detectChanges();
  }
}
