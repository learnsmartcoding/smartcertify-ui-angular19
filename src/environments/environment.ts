// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";




const serverUrl='https://localhost:7209/api';
//const serverUrl='https://smartcertify-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  adb2cConfig: {
    clientId:  'bd0dc0fe-b203-43c2-9b66-b13d3a6e55d0',
    authority: 'https://LearnWithKarthik.ciamlogin.com/',
    scopeUrls:[
      'api://f95e12ed-4803-49df-881b-15fefe8b8343/User.Read',
      'api://f95e12ed-4803-49df-881b-15fefe8b8343/User.Write'
    ],
    apiEndpointUrl: serverUrl
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
