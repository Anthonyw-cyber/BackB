import { HttpStatus } from '@nestjs/common';
import { CreateArtisantDto } from './dto/create.artisant.dto';
import { Artisant } from './entity/artisant.entity';
import { ArtisantService } from './artisant.service';
export declare class ArtisantController {
    private readonly artisantService;
    constructor(artisantService: ArtisantService);
    getallArtisant(): Promise<{
        statusCode: HttpStatus;
        data: Artisant[];
    }>;
    getRand(): Promise<{
        data: Artisant[];
    }>;
    FindAbonner(): Promise<{
        data: any;
    }>;
    getArtisantByID(id: number): Promise<{
        statusCode: HttpStatus;
        data: Artisant;
    }>;
    createArtisant(data: CreateArtisantDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Artisant;
    }>;
    updatecommerce(commerceID: number, data: CreateArtisantDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Artisant;
    }>;
    deletecommerce(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    serverAvatar(name: string, res: any): Promise<any>;
    uploadAvatar(userId: any, file: any): void;
    uploadVideo(userId: any, file: any): void;
}
