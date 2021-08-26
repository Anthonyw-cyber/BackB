import { Repository } from 'typeorm';
import { CreateArtisantDto } from './dto/create.artisant.dto';
import { PatchArtisantDto } from './dto/patch.artisant.dto';
import { Artisant } from './entity/artisant.entity';
export declare class ArtisantService {
    private readonly artisantRepository;
    constructor(artisantRepository: Repository<Artisant>);
    findAllArtisant(): Promise<Artisant[]>;
    getArtisantByID(id: number): Promise<Artisant>;
    updateArtisant(id: number, data: Partial<PatchArtisantDto>): Promise<Artisant>;
    deleteArtisant(id: number): Promise<void>;
    postArtisant(data: CreateArtisantDto): Promise<Artisant>;
    findRand(): Promise<Artisant[]>;
    SetAvatar(id: number, AvatarUrl: string): Promise<void>;
    setVideo(id: number, videoUrl: string): Promise<void>;
    findAbonnerRand(): Promise<any>;
}
