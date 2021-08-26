declare type envNames = 'MYSQL_HOST' | 'MYSQL_DATABASE' | 'MYSQL_ROOT_PASSWORD' | 'MYSQL_USER' | 'MYSQL_PASSWORD' | 'NODE_URL' | 'CONFIG_TEST' | 'NODE_PORT_INTERN' | 'NODE_PORT_EXTERN' | 'MYSQL_PORT_INTERN' | 'MYSQL_PORT_EXTERN' | 'ADMINER_PORT_INTERN' | 'ADMINER_PORT_EXTERN' | string;
export declare class ConfigService {
    private readonly envConfig;
    constructor();
    get(key: envNames): string;
}
export {};
