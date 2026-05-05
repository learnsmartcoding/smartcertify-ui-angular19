// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";




const serverUrl='https://smartcertify-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
 entraIdConfig: {
    clientId: 'c7550f4d-936c-442a-90ac-fa5f048d6406',
    authority: 'https://learnsmartcodingidentity.ciamlogin.com/',
    redirectUri: 'http://localhost:4200/auth',
    postLogoutRedirectUri: 'http://localhost:4200/courses',
    scopeUrls: {
      userReadScope: 'api://989e8bb2-54fc-4ea4-8747-e0912b045bf0/User.Read',
      userWriteScope: 'api://989e8bb2-54fc-4ea4-8747-e0912b045bf0/User.Write',
    },
    apiEndpointUrl: 'https://smartcertify-api.azurewebsites.net/api'
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
