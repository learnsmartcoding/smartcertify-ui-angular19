import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { LoginService } from './services/login.service';
import { CurrentUserService } from './services/current-user.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    NgxSpinnerComponent    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isIframe = false;
  title = 'SmartCertify';

  constructor(
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private loginService: LoginService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

    this.msalService.handleRedirectObservable().subscribe({
      next: () => {
        this.loginService.refreshFromMsal();
        this.currentUserService.loadIfAuthenticated().subscribe();
      },
      error: (error) => {
        console.error('MSAL redirect handling failed', error);
      },
    });

    this.msalBroadcastService.inProgress$
      .pipe(filter((status) => status === InteractionStatus.None))
      .subscribe(() => {
        this.loginService.refreshFromMsal();
        this.currentUserService.loadIfAuthenticated().subscribe();
      });
  }

}
