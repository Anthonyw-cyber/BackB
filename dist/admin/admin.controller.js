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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const admin_entity_1 = require("./admin.entity");
const admin_dto_1 = require("./admin.dto");
const login_service_1 = require("../Login/login.service");
const parseAdminTargetUsername_pipe_1 = require("./pipe/parseAdminTargetUsername.pipe");
let AdminController = class AdminController {
    constructor(adminService, loginAdmin) {
        this.adminService = adminService;
        this.loginAdmin = loginAdmin;
    }
    login(admins, adminData) {
        return this.loginAdmin.adminLogin(admins, adminData);
    }
    createAdmin(adminData) {
        return this.loginAdmin.adminSignup(adminData);
    }
    async getAdminByName(username) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.adminService.getadminByName(username),
        };
    }
    async deleteAdmin(id) {
        console.log(id);
        await this.adminService.deleteadmin(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'admin deleted successfully',
        };
    }
    async getallArtisant() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.adminService.getadmin(),
        };
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body('username', parseAdminTargetUsername_pipe_1.ParseAdminTargetUsernamePipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_entity_1.admin, admin_dto_1.adminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    common_1.Post('signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.adminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createAdmin", null);
__decorate([
    common_1.Get(':getByName'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAdminByName", null);
__decorate([
    common_1.Delete('/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteAdmin", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getallArtisant", null);
AdminController = __decorate([
    swagger_1.ApiTags('admin'),
    common_1.Controller('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        login_service_1.LoginService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map