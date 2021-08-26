"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtisanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artisant_controller_1 = require("./artisant.controller");
const artisant_entity_1 = require("./entity/artisant.entity");
const artisant_service_1 = require("./artisant.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let ArtisanModule = class ArtisanModule {
};
ArtisanModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([artisant_entity_1.Artisant]), platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './tmp/uploads/artisant',
                    storage: multer_1.diskStorage({
                        destination: './tmp/uploads/artisant',
                    }),
                    limits: { fileSize: 8 * 1000000 }
                }),
            }),
        ],
        controllers: [artisant_controller_1.ArtisantController],
        providers: [artisant_service_1.ArtisantService],
        exports: [artisant_service_1.ArtisantService, typeorm_1.TypeOrmModule],
    })
], ArtisanModule);
exports.ArtisanModule = ArtisanModule;
//# sourceMappingURL=artisan.module.js.map