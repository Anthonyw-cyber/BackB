"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvenementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evenement_controller_1 = require("./evenement.controller");
const evenement_entity_1 = require("./evenement.entity");
const evenement_service_1 = require("./evenement.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let EvenementModule = class EvenementModule {
};
EvenementModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([evenement_entity_1.evenement]), platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './tmp/uploads/event',
                    storage: multer_1.diskStorage({
                        destination: './tmp/uploads/event',
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
        providers: [evenement_service_1.EvenementService],
        exports: [evenement_service_1.EvenementService, typeorm_1.TypeOrmModule],
        controllers: [evenement_controller_1.EvenementController],
    })
], EvenementModule);
exports.EvenementModule = EvenementModule;
//# sourceMappingURL=evenement.module.js.map