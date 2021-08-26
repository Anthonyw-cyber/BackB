import {ParseTargetEntityPipe} from "./entity.pipe";
import {Injectable, PipeTransform} from "@nestjs/common";
import {admin} from "../admin.entity";
import {AdminService} from "../admin.service";

@Injectable()
export class ParseAdminTargetUsernamePipe extends ParseTargetEntityPipe<admin> implements PipeTransform {
    constructor(adminService: AdminService) {
        super(
            {
                error: () => `email must be exist`,
                description: () => `badEmail`,
            },
            {
                error: (adminUsername) => `Practitioner with email "${adminUsername}" was not found`,
                description: () => `badPatientEmail`,
            },
            (adminUsername) => adminService.getadminByName(adminUsername),
        );
    }
}
