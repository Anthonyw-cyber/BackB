import {Controller, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Brackets, createQueryBuilder, Repository} from 'typeorm';

import { CreateEvenementDto } from './dto/create.Evenement.dto';
import { PatchEvenementDto } from './dto/patch.Evenement.dto';
import { evenement } from './evenement.entity';

@Injectable()
export class EvenementService {
  constructor(
    @InjectRepository(evenement) private readonly evenementRepository: Repository<evenement>,

  ) {}




  getEvenementall () {
    return  this.evenementRepository.find()
  }
  async createEvenement(data: CreateEvenementDto){
    const event = this.evenementRepository.create(data);
    await this.evenementRepository.save(data);
    return event;
  }


  async getbyID(id: number) {
    return await this.evenementRepository.findOne({where: {id}});
    
  }

  async updateEvent(id: number, data: Partial<PatchEvenementDto>) {
    await this.evenementRepository.update({id},data);
    return await this.evenementRepository.findOne({id});

  }

  async deleteEvent(id: number) {
    await this.evenementRepository.delete({id});


  }
  public async SetAvatar(id: number,AvatarUrl: string){
    this.evenementRepository.update(id,{Avatar:AvatarUrl});
  }

  async FindRand()
  {

    return await this.evenementRepository
        .createQueryBuilder()
        .orderBy('RAND()')
        .getMany();

  }
}
