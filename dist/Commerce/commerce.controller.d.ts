import { HttpStatus } from '@nestjs/common';
import { CreateCommerceDto } from './dto/create.commerce.dto';
import { commerce } from './entity/commerce.entity';
import { CommerceService } from './commerce.service';
import { PatchCommerceDto } from './dto/patch.commerce.dto';
export declare class CommerceController {
    private readonly commerceService;
    constructor(commerceService: CommerceService);
    getallcommerce(): Promise<{
        statusCode: HttpStatus;
        data: commerce[];
    }>;
    getRand(): Promise<{
        data: commerce[];
    }>;
    FindAbonner(): Promise<{
        data: any;
    }>;
    getcommerceByID(id: number): Promise<{
        statusCode: HttpStatus;
        data: commerce;
    }>;
    createCommerce(data: CreateCommerceDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: commerce;
    }>;
    updatecommerce(commerceID: number, data: PatchCommerceDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: commerce;
    }>;
    deletecommerce(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    serverAvatar(name: string, res: any): Promise<any>;
    uploadAvatar(userId: any, file: any): void;
    uploadVideo(userId: any, file: any): void;
}
