export interface EnvironmentConfiguration {
    env_name: string;
    production: boolean;
    apiUrl: string;
    adb2cConfig: {
        clientId: string;
        scopeUrls:string[];
        apiEndpointUrl: string;
        authority: string;
    }
    cacheTimeInMinutes: number;
}