import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { LoginService } from '../../services/login.service';
import { PostLoginRedirectService } from '../../services/post-login-redirect.service';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule],
  template: '<p class="visually-hidden">Completing sign in...</p>',
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private msalService: MsalService,
    private loginService: LoginService,
    private currentUserService: CurrentUserService,
    private postLoginRedirectService: PostLoginRedirectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.msalService.handleRedirectObservable().subscribe({
      next: (result: AuthenticationResult | null) => {
        if (result?.account) {
          this.msalService.instance.setActiveAccount(result.account);
        }

        this.loginService.refreshFromMsal();
        this.currentUserService.loadIfAuthenticated(true).subscribe(() => {
          this.router.navigateByUrl(this.postLoginRedirectService.consume() ?? '/home');
        });
      },
      error: (error) => {
        console.error('MSAL redirect callback error', error);
        this.loginService.refreshFromMsal();
        this.currentUserService.clear();
        this.router.navigateByUrl('/home');
      },
    });
  }
}
