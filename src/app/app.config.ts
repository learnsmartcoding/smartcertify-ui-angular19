import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {
  IPublicClientApplication,
  PublicClientApplication,
  InteractionType,
  BrowserCacheLocation,
  LogLevel,
} from '@azure/msal-browser';
import {
  MsalInterceptor,
  MSAL_INSTANCE,
  MsalInterceptorConfiguration,
  MsalGuardConfiguration,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
  MsalService,
  MsalGuard,
  MsalBroadcastService,
  ProtectedResourceScopes,
} from '@azure/msal-angular';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withFetch,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpRequestInterceptor } from './services/spinner-interceptor';
import { provideRouter } from '@angular/router';
import { HttpErrorInterceptor } from './interceptors/http-error.service';

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_smartcertify_susi',
    resetPassword: 'B2C_1_smartcertify_password_reset',
    editProfile: 'B2C_1_smartcertify_profile_edit',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_susi',
    },
    resetPassword: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_password_reset',
    },
    editProfile: {
      authority:
        'https://smartlearnbykarthik.b2clogin.com/smartlearnbykarthik.onmicrosoft.com/B2C_1_smartcertify_profile_edit',
    },
  },
  authorityDomain: 'smartlearnbykarthik.b2clogin.com',
};

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
   auth: {
      clientId: environment.adb2cConfig.clientId, // Replace the placeholder with your application ID
        authority: environment.adb2cConfig.authority, // Replace the placeholder with your tenant subdomain
        redirectUri: '/auth', // Points to window.location.origin by default. You must register this URI on Microsoft Entra admin center/App Registration.
        postLogoutRedirectUri: '/', // Points to window.location.origin by default
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
    },
    system: {
      allowNativeBroker: false, // Disables WAM Broker
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<
    string,
    //Array<string>
    Array<string | ProtectedResourceScopes> | null
  >();

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/courses`,
    [
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(`${environment.adb2cConfig.apiEndpointUrl}/Exam`, [
    {
      httpMethod: 'GET',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'POST',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'PUT',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
  ]);

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/questions`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/choices`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  protectedResourceMap.set(
    `${environment.adb2cConfig.apiEndpointUrl}/questions`,
    [
      {
        httpMethod: 'GET',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'POST',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PUT',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'DELETE',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
      {
        httpMethod: 'PATCH',
        scopes: [...environment.adb2cConfig.scopeUrls],
      },
    ]
  );

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: [...environment.adb2cConfig.scopeUrls],
    },
    loginFailedRoute: '/login-failed',
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      CarouselModule.forRoot(),
      AccordionModule.forRoot(),
      RatingModule.forRoot(),
      ModalModule.forRoot(),
      PopoverModule.forRoot(),
      BrowserModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    //provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
};
