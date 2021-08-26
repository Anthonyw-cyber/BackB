import { Repository } from 'typeorm';
import { CreateEvenementDto } from './dto/create.Evenement.dto';
import { PatchEvenementDto } from './dto/patch.Evenement.dto';
import { evenement } from './evenement.entity';
export declare class EvenementService {
    private readonly evenementRepository;
    constructor(evenementRepository: Repository<evenement>);
    getEvenementall(): Promise<evenement[]>;
    createEvenement(data: CreateEvenementDto): Promise<evenement>;
    getbyID(id: number): Promise<evenement>;
    updateEvent(id: number, data: Partial<PatchEvenementDto>): Promise<evenement>;
    deleteEvent(id: number): Promise<void>;
    SetAvatar(id: number, AvatarUrl: string): Promise<void>;
    FindRand(): Promise<evenement[]>;
}
