import {
  BrowserCacheLocation,
  Configuration,
  InteractionType,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
  ProtectedResourceScopes,
} from '@azure/msal-angular';
import { environment } from '../environments/environment';

const apiBaseUrl = environment.entraIdConfig.apiEndpointUrl;
const readScope = environment.entraIdConfig.scopeUrls.userReadScope;
const writeScope = environment.entraIdConfig.scopeUrls.userWriteScope;
const apiScopes = [readScope, writeScope];

function getKnownAuthority(authority: string): string {
  return new URL(authority).host;
}

export const loginRequest = {
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

export const msalConfig: Configuration = {
  auth: {
    clientId: environment.entraIdConfig.clientId,
    authority: environment.entraIdConfig.authority,
    knownAuthorities: [getKnownAuthority(environment.entraIdConfig.authority)],
    redirectUri: environment.entraIdConfig.redirectUri,
    postLogoutRedirectUri: environment.entraIdConfig.postLogoutRedirectUri,
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
      loggerCallback: (_level, message) => {
        console.log(message);
      },
    },
  },
};

export function createMsalInstance() {
  return new PublicClientApplication(msalConfig);
}

export function createMsalGuardConfig(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest,
    loginFailedRoute: '/home',
  };
}

export function createMsalInterceptorConfig(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<
    string,
    Array<string | ProtectedResourceScopes> | null
  >();

  protectedResourceMap.set(`${apiBaseUrl}/courses`, [
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/exam`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/questions`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/choices`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/questions/*`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/exam`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/exam/*`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);


  protectedResourceMap.set(`${apiBaseUrl}/User`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  protectedResourceMap.set(`${apiBaseUrl}/User/*`, [
    {
      httpMethod: 'GET',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'POST',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PUT',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'DELETE',
      scopes: [...apiScopes],
    },
    {
      httpMethod: 'PATCH',
      scopes: [...apiScopes],
    },
  ]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}
