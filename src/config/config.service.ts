import { Injectable } from '@nestjs/common';
import * as dotEnv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

type envNames =
  | 'MYSQL_HOST'
  | 'MYSQL_DATABASE'
  | 'MYSQL_ROOT_PASSWORD'
  | 'MYSQL_USER'
  | 'MYSQL_PASSWORD'
  | 'NODE_URL'
  | 'CONFIG_TEST'
  | 'NODE_PORT_INTERN'
  | 'NODE_PORT_EXTERN'
  | 'MYSQL_PORT_INTERN'
  | 'MYSQL_PORT_EXTERN'
  | 'ADMINER_PORT_INTERN'
  | 'ADMINER_PORT_EXTERN'
  | string;

const ENV_CONFIGS = [
  {
    folder: 'mysql',
    env: 'MYSQL_ENV',
  },
  {
    folder: 'node',
    env: 'NODE_ENV',
  },
];

@Injectable()
export class ConfigService {
  private readonly envConfig: {
    [key in envNames]: string;
  };

  constructor() {
    console.log('NODE_ENV', process.env.NODE_ENV);
    console.log('MYSQL_ENV', process.env.MYSQL_ENV);
    this.envConfig = process.env;
    if (!process.env.ENV_LOAD) {
      const DEFAULT_ENV_FILE = path.resolve(__dirname, `../../.env`);
      Object.assign(this.envConfig, dotEnv.parse(fs.readFileSync(DEFAULT_ENV_FILE)));
    /*  for (const envConfig of ENV_CONFIGS) {
        const ENV_FOLDER = `../../environments/${envConfig.folder}`;
        const DEFAULT_ENV_FILE = path.resolve(__dirname, ENV_FOLDER, `${process.env[envConfig.env] || ''}.env`);
        Object.assign(this.envConfig, dotEnv.parse(fs.readFileSync(DEFAULT_ENV_FILE)));
      }*/
    }
  }

  get(key: envNames): string {
    return this.envConfig[key];
  }
}
