import { Global,Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AdminController} from "./admin.controller";
import {AdminService} from "./admin.service";
import {admin} from "./admin.entity";


@Global()
@Module({
    imports: [TypeOrmModule.forFeature([admin])  ],
   controllers:[AdminController],
    providers: [AdminService],
    exports:[AdminService,TypeOrmModule],
})
export class AdminModule {}
