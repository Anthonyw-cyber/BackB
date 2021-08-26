import { Repository } from 'typeorm';
import { CreateCommerceDto } from './dto/create.commerce.dto';
import { PatchCommerceDto } from './dto/patch.commerce.dto';
import { commerce } from './entity/commerce.entity';
export declare class CommerceService {
    private readonly commerceRepository;
    constructor(commerceRepository: Repository<commerce>);
    findAllCommmerce(): Promise<commerce[]>;
    getCommerceByID(id: number): Promise<commerce>;
    updatecommerde(id: number, data: Partial<PatchCommerceDto>): Promise<commerce>;
    deleteCommerce(id: number): Promise<void>;
    PostCommerce(data: CreateCommerceDto): Promise<commerce>;
    FindRand(): Promise<commerce[]>;
    SetAvatar(id: number, AvatarUrl: string): Promise<void>;
    setVideo(id: number, videoUrl: string): Promise<void>;
    FindAbonnerRand(): Promise<any>;
}
