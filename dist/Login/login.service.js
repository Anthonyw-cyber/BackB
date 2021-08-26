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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const bcrypt_1 = require("bcrypt");
const admin_service_1 = require("../admin/admin.service");
let LoginService = class LoginService {
    constructor(authService, adminservice) {
        this.authService = authService;
        this.adminservice = adminservice;
    }
    adminSignup(signUpData) {
        return this.adminservice.createAdmin(signUpData).then((admin) => {
            admin.token = this.authService.getToken(admin);
            delete admin.password;
            return admin;
        });
    }
    adminLogin(admins, AdminData) {
        if (!bcrypt_1.compareSync(AdminData.password, admins.password) || AdminData.username !== admins.username) {
            throw new common_1.UnauthorizedException();
        }
        else {
            admins.token = this.authService.getToken(admins);
            delete admins.password;
            return admins;
        }
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        admin_service_1.AdminService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map