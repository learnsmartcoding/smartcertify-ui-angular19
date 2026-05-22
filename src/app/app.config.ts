import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalBroadcastService,
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalService,
} from '@azure/msal-angular';

import { HttpErrorInterceptor } from './interceptors/http-error.service';
import { routes } from './app.routes';
import { HttpRequestInterceptor } from './services/spinner-interceptor';
import {
  createMsalGuardConfig,
  createMsalInstance,
  createMsalInterceptorConfig,
} from './auth.config';

export function initializeMsal(msalService: MsalService) {
  return () => msalService.instance.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      MsalModule,
      CarouselModule,
      AccordionModule,
      RatingModule,
      ModalModule,
      PopoverModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    {
      provide: MSAL_INSTANCE,
      useFactory: createMsalInstance,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: createMsalGuardConfig,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: createMsalInterceptorConfig,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMsal,
      deps: [MsalService],
      multi: true,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
};
