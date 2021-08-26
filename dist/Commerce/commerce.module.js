"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const commerce_controller_1 = require("./commerce.controller");
const commerce_entity_1 = require("./entity/commerce.entity");
const commerce_service_1 = require("./commerce.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let CommerceModule = class CommerceModule {
};
CommerceModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([commerce_entity_1.commerce]), platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './tmp/uploads/commerce',
                    storage: multer_1.diskStorage({
                        destination: './tmp/uploads/commerce',
                        filename: (req, file, cb) => {
                            const { originalname } = file;
                            const fileExtension = `.${originalname.split('.').pop()}`;
                            const fileName = originalname.replace(fileExtension, '').replace(/(\W+)/gm, '-');
                            cb(null, `${Date.now()}-${fileName + fileExtension}`);
                        },
                    }),
                    limits: { fileSize: 8 * 1000000 }
                }),
            }),
        ],
        controllers: [commerce_controller_1.CommerceController],
        providers: [commerce_service_1.CommerceService],
        exports: [commerce_service_1.CommerceService, typeorm_1.TypeOrmModule],
    })
], CommerceModule);
exports.CommerceModule = CommerceModule;
//# sourceMappingURL=commerce.module.js.map