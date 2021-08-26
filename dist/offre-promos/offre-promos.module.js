"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffrePromosModule = void 0;
const common_1 = require("@nestjs/common");
const offre_promos_entity_1 = require("./offre-promos.entity");
const typeorm_1 = require("@nestjs/typeorm");
const offre_promos_service_1 = require("./offre-promos.service");
const offre_promos_controller_1 = require("./offre-promos.controller");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let OffrePromosModule = class OffrePromosModule {
};
OffrePromosModule = __decorate([
    common_1.Module({ imports: [typeorm_1.TypeOrmModule.forFeature([offre_promos_entity_1.OffrePromosEntity]), platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './tmp/uploads/offre',
                    storage: multer_1.diskStorage({
                        destination: './tmp/uploads/offre',
                        filename: (req, file, cb) => {
                            const { originalname } = file;
                            const fileExtension = `.${originalname.split('.').pop()}`;
                            const fileName = originalname.replace(fileExtension, '').replace(/(\W+)/gm, '-');
                            cb(null, `${Date.now()}-${fileName + fileExtension}`);
                        },
                    }),
                    limits: { fileSize: 8 * 1000000 }
                }),
            }),],
        controllers: [offre_promos_controller_1.OffrePromosController],
        providers: [offre_promos_service_1.OffrePromosService] })
], OffrePromosModule);
exports.OffrePromosModule = OffrePromosModule;
//# sourceMappingURL=offre-promos.module.js.map