"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const dotEnv = require("dotenv");
const fs = require("fs");
const path = require("path");
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
let ConfigService = class ConfigService {
    constructor() {
        console.log('NODE_ENV', process.env.NODE_ENV);
        console.log('MYSQL_ENV', process.env.MYSQL_ENV);
        this.envConfig = process.env;
        if (!process.env.ENV_LOAD) {
            const DEFAULT_ENV_FILE = path.resolve(__dirname, `../../.env`);
            Object.assign(this.envConfig, dotEnv.parse(fs.readFileSync(DEFAULT_ENV_FILE)));
        }
    }
    get(key) {
        return this.envConfig[key];
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map