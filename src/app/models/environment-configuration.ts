export interface EnvironmentConfiguration {
    env_name: string;
    production: boolean;
    apiUrl: string;
    entraIdConfig: {
        clientId: string;
        authority: string;
        redirectUri: string;
        postLogoutRedirectUri: string;
        scopeUrls: {
            userReadScope: string;
            userWriteScope: string;
        };
        apiEndpointUrl: string;
    }
    cacheTimeInMinutes: number;
}
