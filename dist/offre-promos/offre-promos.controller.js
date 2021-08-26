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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffrePromosController = void 0;
const common_1 = require("@nestjs/common");
const offre_promos_service_1 = require("./offre-promos.service");
const offerDto_1 = require("./offerDto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let OffrePromosController = class OffrePromosController {
    constructor(offrepromosService) {
        this.offrepromosService = offrepromosService;
    }
    async getoffre() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.offrepromosService.getalloffre(),
        };
    }
    async createUsers(data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User added successfully',
            data: await this.offrepromosService.create(data),
        };
    }
    async getOffreByid(id) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.offrepromosService.getPromoByid(id)
        };
    }
    async updateOffre(id, data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User update successfully ',
            data: await this.offrepromosService.updatePromo(id, data),
        };
    }
    async deleteUser(id) {
        await this.offrepromosService.deleteByid(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
    async getRand() {
        return {
            data: await this.offrepromosService.FindRand(),
        };
    }
    uploadAvatar(userId, file) {
        this.offrepromosService.SetAvatar(Number(userId), `${file.filename}`);
    }
    async serverAvatar(name, res) {
        res.sendFile(name, { root: './tmp/uploads/event' });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "getoffre", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offerDto_1.OfferDto]),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "createUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "getOffreByid", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, offerDto_1.OfferDto]),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "updateOffre", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "deleteUser", null);
__decorate([
    common_1.Get('rand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "getRand", null);
__decorate([
    common_1.Patch(':userid/avatar'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/offre',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${path_1.extname(file.originalname)}`);
            }
        })
    })),
    __param(0, common_1.Param('userid')), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OffrePromosController.prototype, "uploadAvatar", null);
__decorate([
    common_1.Get('offre/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OffrePromosController.prototype, "serverAvatar", null);
OffrePromosController = __decorate([
    swagger_1.ApiTags('Offre-promos'),
    common_1.Controller('offre-promos'),
    __metadata("design:paramtypes", [offre_promos_service_1.OffrePromosService])
], OffrePromosController);
exports.OffrePromosController = OffrePromosController;
//# sourceMappingURL=offre-promos.controller.js.map