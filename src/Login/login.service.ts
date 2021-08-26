import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import {adminDto} from "../admin/admin.dto";
import {admin} from "../admin/admin.entity";
import {compare, compareSync} from "bcrypt";
import {AdminService} from "../admin/admin.service";


@Injectable()
export class LoginService {
    constructor(
        private readonly authService: AuthService,
        private readonly adminservice: AdminService) {
    }

    adminSignup(signUpData: adminDto){
        return this.adminservice.createAdmin(signUpData).then((admin) =>{
            admin.token = this.authService.getToken(admin);
            delete admin.password;
            return admin;
        })
    }

    adminLogin(admins: admin, AdminData:adminDto){
        if(!compareSync(AdminData.password, admins.password,) ||AdminData.username !== admins.username){
            throw new UnauthorizedException();

        }   else{
            admins.token = this.authService.getToken(admins)
            delete  admins.password;
            return admins;
        }
    }
}
