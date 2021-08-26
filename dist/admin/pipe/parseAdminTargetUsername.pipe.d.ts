import { ParseTargetEntityPipe } from "./entity.pipe";
import { PipeTransform } from "@nestjs/common";
import { admin } from "../admin.entity";
import { AdminService } from "../admin.service";
export declare class ParseAdminTargetUsernamePipe extends ParseTargetEntityPipe<admin> implements PipeTransform {
    constructor(adminService: AdminService);
}
