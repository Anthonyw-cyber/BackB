import { HttpStatus } from '@nestjs/common';
import { AdminService } from "./admin.service";
import { admin } from "./admin.entity";
import { adminDto } from "./admin.dto";
import { LoginService } from "../Login/login.service";
export declare class AdminController {
    private adminService;
    private loginAdmin;
    constructor(adminService: AdminService, loginAdmin: LoginService);
    login(admins: admin, adminData: adminDto): admin;
    createAdmin(adminData: adminDto): Promise<admin>;
    getAdminByName(username: string): Promise<{
        statusCode: HttpStatus;
        data: admin;
    }>;
    deleteAdmin(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    getallArtisant(): Promise<{
        statusCode: HttpStatus;
        data: any;
    }>;
}
