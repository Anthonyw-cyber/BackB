import {Body, Controller, Delete, Get, HttpStatus, Param, Post} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {Admin} from "typeorm";
import {AdminService} from "./admin.service";
import {admin} from "./admin.entity";
import {adminDto} from "./admin.dto";
import {LoginService} from "../Login/login.service";
import {ParseAdminTargetUsernamePipe} from "./pipe/parseAdminTargetUsername.pipe";


@ApiTags('admin')
@Controller('admin')


export class AdminController {


    constructor(private adminService: AdminService,
                private loginAdmin: LoginService,) {
    }

    @Post('login')
    login(@Body('username', ParseAdminTargetUsernamePipe)admins: admin, @Body() adminData: adminDto) {
        return this.loginAdmin.adminLogin(admins, adminData);


    }

    @Post('signup')
    createAdmin(@Body()adminData: adminDto) {
        return this.loginAdmin.adminSignup(adminData)
    }

    @Get(':getByName')
    async getAdminByName(@Param('username') username: string,) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.adminService.getadminByName(username),
        };
    }

    @Delete('/delete/:id')
    async deleteAdmin(@Param('id') id: number) {
        console.log(id);
        await this.adminService.deleteadmin(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'admin deleted successfully',
        };
    }

    @Get()
    async getallArtisant() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.adminService.getadmin(),
        };

    }
}
