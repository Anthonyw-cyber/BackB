import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {admin} from "./admin.entity";

import {adminDto} from "./admin.dto";
import {InjectRepository} from "@nestjs/typeorm";





@Injectable()
export class AdminService {

    constructor(@InjectRepository(admin)  private adminRepo: Repository<admin>
                ) {
    }



    createAdmin(adminData: adminDto){
        const adminCreated = new admin();
        adminCreated.username = adminData.username;
        adminCreated.password= adminData.password;
        return this.adminRepo.save(adminCreated);
    }
    async getadminByName(username: string) {
        return await this.adminRepo.findOne({where:{username: username}});
    }
    async getadmin(){
        return await this.adminRepo.query('SELECT id,username FROM admin')

    }
    /* async adDefaultAdmin(){
        await this.adminRepo.query('INSERT INTO admin(username,password) VALUES(admi,admi)')
    }*/
    async deleteadmin(id: number) {
        await this.adminRepo.delete({id});

    }


    }
