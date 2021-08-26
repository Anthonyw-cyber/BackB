import { OffrePromosEntity } from "./offre-promos.entity";
import { Repository } from "typeorm";
import { OfferDto } from "./offerDto";
export declare class OffrePromosService {
    private offrePromoRepo;
    constructor(offrePromoRepo: Repository<OffrePromosEntity>);
    getalloffre(): Promise<OffrePromosEntity[]>;
    create(data: OfferDto): Promise<OffrePromosEntity>;
    getPromoByid(id: number): Promise<OffrePromosEntity>;
    updatePromo(id: number, data: Partial<OfferDto>): Promise<OffrePromosEntity>;
    deleteByid(id: number): Promise<void>;
    SetAvatar(id: number, AvatarUrl: string): Promise<void>;
    FindRand(): Promise<OffrePromosEntity[]>;
}
