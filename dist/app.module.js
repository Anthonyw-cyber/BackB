"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const evenement_module_1 = require("./evenement/evenement.module");
const commerce_module_1 = require("./Commerce/commerce.module");
const offre_promos_module_1 = require("./offre-promos/offre-promos.module");
const admin_module_1 = require("./admin/admin.module");
const platform_express_1 = require("@nestjs/platform-express");
const auth_module_1 = require("./auth/auth.module");
const login_module_1 = require("./Login/login.module");
const artisan_module_1 = require("./artisan/artisan.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                useFactory: (configService) => {
                    const test = {
                        type: 'mariadb',
                        host: configService.get('MYSQL_HOST'),
                        port: +configService.get('MYSQL_PORT_INTERN'),
                        username: configService.get('MYSQL_USER'),
                        password: configService.get('MYSQL_PASSWORD'),
                        database: configService.get('MYSQL_DATABASE'),
                        entities: [__dirname + '/**/*.entity{.ts,.js}'],
                        synchronize: true,
                    };
                    console.log(JSON.stringify(test, null, 2));
                    return test;
                },
                inject: [config_service_1.ConfigService],
            }),
            commerce_module_1.CommerceModule,
            artisan_module_1.ArtisanModule,
            evenement_module_1.EvenementModule,
            evenement_module_1.EvenementModule,
            offre_promos_module_1.OffrePromosModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            login_module_1.LoginModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map