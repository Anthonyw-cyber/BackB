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
exports.EvenementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const patch_Evenement_dto_1 = require("./dto/patch.Evenement.dto");
const evenement_service_1 = require("./evenement.service");
const common_2 = require("@nestjs/common");
const create_Evenement_dto_1 = require("./dto/create.Evenement.dto");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let EvenementController = class EvenementController {
    constructor(evenementService) {
        this.evenementService = evenementService;
    }
    async getall() {
        return {
            statusCode: common_2.HttpStatus.OK,
            data: await this.evenementService.getEvenementall(),
        };
    }
    async createEvent(data) {
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Event added successfully',
            data: await this.evenementService.createEvenement(data)
        };
    }
    async getEventByID(evenementID) {
        return {
            statusCode: common_2.HttpStatus.OK,
            data: await this.evenementService.getbyID(evenementID),
        };
    }
    async getRand() {
        return {
            data: await this.evenementService.FindRand(),
        };
    }
    async updateEvent(eventID, data) {
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Event successfully updated',
            data: await this.evenementService.updateEvent(eventID, data)
        };
    }
    async deleteevent(id) {
        await this.evenementService.deleteEvent(id);
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Event deleted successfully',
        };
    }
    uploadAvatar(userId, file) {
        this.evenementService.SetAvatar(Number(userId), `${file.filename}`);
    }
    async serverAvatar(name, res) {
        res.sendFile(name, { root: './tmp/uploads/event' });
    }
};
__decorate([
    common_2.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "getall", null);
__decorate([
    common_2.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Evenement_dto_1.CreateEvenementDto]),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "createEvent", null);
__decorate([
    common_2.Get(':evenementID'),
    __param(0, common_1.Param('evenementID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "getEventByID", null);
__decorate([
    common_2.Get('rand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "getRand", null);
__decorate([
    common_1.Patch(':eventID'),
    __param(0, common_1.Param('eventID')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, patch_Evenement_dto_1.PatchEvenementDto]),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "updateEvent", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "deleteevent", null);
__decorate([
    common_1.Patch(':userid/avatar'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './tmp/uploads/event',
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
], EvenementController.prototype, "uploadAvatar", null);
__decorate([
    common_2.Get('event/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvenementController.prototype, "serverAvatar", null);
EvenementController = __decorate([
    swagger_1.ApiTags('evenement'),
    common_1.Controller('evenement'),
    __metadata("design:paramtypes", [evenement_service_1.EvenementService])
], EvenementController);
exports.EvenementController = EvenementController;
//# sourceMappingURL=evenement.controller.js.map