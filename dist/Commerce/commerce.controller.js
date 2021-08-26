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
exports.CommerceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_commerce_dto_1 = require("./dto/create.commerce.dto");
const commerce_service_1 = require("./commerce.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const patch_commerce_dto_1 = require("./dto/patch.commerce.dto");
let CommerceController = class CommerceController {
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async getallcommerce() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.commerceService.findAllCommmerce(),
        };
    }
    async getRand() {
        return {
            data: await this.commerceService.FindRand(),
        };
    }
    async FindAbonner() {
        return {
            data: await this.commerceService.FindAbonnerRand(),
        };
    }
    async getcommerceByID(id) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.commerceService.getCommerceByID(id),
        };
    }
    async createCommerce(data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Commerce addes Succesfully',
            data: await this.commerceService.PostCommerce(data)
        };
    }
    async updatecommerce(commerceID, data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Artisant successfully updated',
            data: await this.commerceService.updatecommerde(commerceID, data)
        };
    }
    async deletecommerce(id) {
        await this.commerceService.deleteCommerce(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'commerce deleted successfully',
        };
    }
    async serverAvatar(name, res) {
        res.sendFile(name, { root: './tmp/uploads/commerce' });
    }
    uploadAvatar(userId, file) {
        this.commerceService.SetAvatar(Number(userId), `${file.filename}`);
    }
    uploadVideo(userId, file) {
        this.commerceService.setVideo(Number(userId), `${file.filename}`);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getallcommerce", null);
__decorate([
    common_1.Get('rand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getRand", null);
__decorate([
    common_1.Get('AbonnerRand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "FindAbonner", null);
__decorate([
    common_1.Get(':commerceID'),
    __param(0, common_1.Param('commerceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getcommerceByID", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commerce_dto_1.CreateCommerceDto]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "createCommerce", null);
__decorate([
    common_1.Patch(':commerceID'),
    __param(0, common_1.Param('commerceID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, patch_commerce_dto_1.PatchCommerceDto]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "updatecommerce", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "deletecommerce", null);
__decorate([
    common_1.Get('commerce/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "serverAvatar", null);
__decorate([
    common_1.Patch(':userid/avatar'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/commerce',
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
], CommerceController.prototype, "uploadAvatar", null);
__decorate([
    common_1.Patch(':userid/video'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/commerce',
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
], CommerceController.prototype, "uploadVideo", null);
CommerceController = __decorate([
    swagger_1.ApiTags('commerce'),
    common_1.Controller('commerces'),
    __metadata("design:paramtypes", [commerce_service_1.CommerceService])
], CommerceController);
exports.CommerceController = CommerceController;
//# sourceMappingURL=commerce.controller.js.map