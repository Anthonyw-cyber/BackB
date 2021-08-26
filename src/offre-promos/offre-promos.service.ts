import { Injectable,HttpStatus } from '@nestjs/common';
import {OffrePromosEntity} from "./offre-promos.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {OfferDto} from "./offerDto";
@Injectable()
export class OffrePromosService {
    constructor(
        @InjectRepository(OffrePromosEntity)
    private offrePromoRepo: Repository<OffrePromosEntity>)
    {}

    async getalloffre() {
        return await this.offrePromoRepo.find();
    }

    async create(data: OfferDto) {
        const user = this.offrePromoRepo.create(data);
        await this.offrePromoRepo.save(data);
        return user;
    }

    async getPromoByid(id: number) {
        return  await  this.offrePromoRepo.findOne(
            {where:{id}});
    }

    async updatePromo(id: number, data: Partial<OfferDto>) {
        await this.offrePromoRepo.update({id}, data);
        return  await this.offrePromoRepo.findOne({id});
        
    }

    async deleteByid(id: number) {
        await this.offrePromoRepo.delete({id});

    }
    public async SetAvatar(id: number,AvatarUrl: string){
        this.offrePromoRepo.update(id,{Avatar:AvatarUrl});
    }
    async FindRand()
    {

        return await this.offrePromoRepo
            .createQueryBuilder()
            .orderBy('RAND()')
            .getMany();

    }

}

