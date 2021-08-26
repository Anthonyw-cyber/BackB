import { HttpStatus } from '@nestjs/common';
import { OffrePromosService } from "./offre-promos.service";
import { OfferDto } from "./offerDto";
export declare class OffrePromosController {
    private offrepromosService;
    constructor(offrepromosService: OffrePromosService);
    getoffre(): Promise<{
        statusCode: HttpStatus;
        data: import("./offre-promos.entity").OffrePromosEntity[];
    }>;
    createUsers(data: OfferDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./offre-promos.entity").OffrePromosEntity;
    }>;
    getOffreByid(id: number): Promise<{
        statusCode: HttpStatus;
        data: import("./offre-promos.entity").OffrePromosEntity;
    }>;
    updateOffre(id: number, data: OfferDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./offre-promos.entity").OffrePromosEntity;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    getRand(): Promise<{
        data: import("./offre-promos.entity").OffrePromosEntity[];
    }>;
    uploadAvatar(userId: any, file: any): void;
    serverAvatar(name: string, res: any): Promise<any>;
}
