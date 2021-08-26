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
exports.ArtisantController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_artisant_dto_1 = require("./dto/create.artisant.dto");
const artisant_service_1 = require("./artisant.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let ArtisantController = class ArtisantController {
    constructor(artisantService) {
        this.artisantService = artisantService;
    }
    async getallArtisant() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.artisantService.findAllArtisant(),
        };
    }
    async getRand() {
        return {
            data: await this.artisantService.findRand(),
        };
    }
    async FindAbonner() {
        return {
            data: await this.artisantService.findAbonnerRand(),
        };
    }
    async getArtisantByID(id) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.artisantService.getArtisantByID(id),
        };
    }
    async createArtisant(data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Artisant addes Succesfully',
            data: await this.artisantService.postArtisant(data)
        };
    }
    async updatecommerce(commerceID, data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Artisant successfully updated',
            data: await this.artisantService.updateArtisant(commerceID, data)
        };
    }
    async deletecommerce(id) {
        await this.artisantService.deleteArtisant(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'commerce deleted successfully',
        };
    }
    async serverAvatar(name, res) {
        res.sendFile(name, { root: './tmp/uploads/artisant' });
    }
    uploadAvatar(userId, file) {
        this.artisantService.SetAvatar(Number(userId), `${file.filename}`);
    }
    uploadVideo(userId, file) {
        this.artisantService.setVideo(Number(userId), `${file.filename}`);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "getallArtisant", null);
__decorate([
    common_1.Get('rand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "getRand", null);
__decorate([
    common_1.Get('AbonnerRand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "FindAbonner", null);
__decorate([
    common_1.Get(':artisantID'),
    __param(0, common_1.Param('artisantID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "getArtisantByID", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artisant_dto_1.CreateArtisantDto]),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "createArtisant", null);
__decorate([
    common_1.Patch(':artisantID'),
    __param(0, common_1.Param('artisantID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_artisant_dto_1.CreateArtisantDto]),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "updatecommerce", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "deletecommerce", null);
__decorate([
    common_1.Get('artisant/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ArtisantController.prototype, "serverAvatar", null);
__decorate([
    common_1.Patch(':userid/avatar'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/artisant',
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
], ArtisantController.prototype, "uploadAvatar", null);
__decorate([
    common_1.Patch(':userid/video'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/artisant',
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
], ArtisantController.prototype, "uploadVideo", null);
ArtisantController = __decorate([
    swagger_1.ApiTags('artisant'),
    common_1.Controller('Artisants'),
    __metadata("design:paramtypes", [artisant_service_1.ArtisantService])
], ArtisantController);
exports.ArtisantController = ArtisantController;
//# sourceMappingURL=artisant.controller.js.map