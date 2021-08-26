import { Repository } from "typeorm";
import { admin } from "./admin.entity";
import { adminDto } from "./admin.dto";
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<admin>);
    createAdmin(adminData: adminDto): Promise<admin>;
    getadminByName(username: string): Promise<admin>;
    getadmin(): Promise<any>;
    deleteadmin(id: number): Promise<void>;
}
