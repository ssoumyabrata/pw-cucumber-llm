export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: 'dev' | 'prod' | 'staging'; 
            BASE_URL: string;
            BROWSER: 'chrome' | 'firefox' | 'webkit';
            HEAD: 'true' | 'false';
        }
    }
}