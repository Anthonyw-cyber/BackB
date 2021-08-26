import { AuthService } from '../auth/auth.service';
import { adminDto } from "../admin/admin.dto";
import { admin } from "../admin/admin.entity";
import { AdminService } from "../admin/admin.service";
export declare class LoginService {
    private readonly authService;
    private readonly adminservice;
    constructor(authService: AuthService, adminservice: AdminService);
    adminSignup(signUpData: adminDto): Promise<admin>;
    adminLogin(admins: admin, AdminData: adminDto): admin;
}
