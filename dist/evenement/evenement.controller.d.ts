import { PatchEvenementDto } from './dto/patch.Evenement.dto';
import { evenement } from './evenement.entity';
import { EvenementService } from './evenement.service';
import { HttpStatus } from '@nestjs/common';
import { CreateEvenementDto } from "./dto/create.Evenement.dto";
export declare class EvenementController {
    private readonly evenementService;
    constructor(evenementService: EvenementService);
    getall(): Promise<{
        statusCode: HttpStatus;
        data: evenement[];
    }>;
    createEvent(data: CreateEvenementDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: evenement;
    }>;
    getEventByID(evenementID: number): Promise<{
        statusCode: HttpStatus;
        data: evenement;
    }>;
    getRand(): Promise<{
        data: evenement[];
    }>;
    updateEvent(eventID: number, data: PatchEvenementDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: evenement;
    }>;
    deleteevent(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    uploadAvatar(userId: any, file: any): void;
    serverAvatar(name: string, res: any): Promise<any>;
}
