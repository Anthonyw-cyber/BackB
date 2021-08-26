import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { CreateCommerceDto } from './dto/create.commerce.dto';
import { PatchCommerceDto } from './dto/patch.commerce.dto';
import { commerce } from './entity/commerce.entity';




@Injectable()
export class CommerceService {

  constructor(@InjectRepository(commerce) private readonly commerceRepository: Repository<commerce>,
 ) {}

    async findAllCommmerce() {

        return await this.commerceRepository.find();
    }

  async getCommerceByID(id: number) {
    return await this.commerceRepository.findOne({where:{id}});
  }


  async updatecommerde(id: number, data: Partial<PatchCommerceDto>) {
    await this.commerceRepository.update({id},data);
    return await this.commerceRepository.findOne({id});

  }
  async deleteCommerce(id: number) {
    await this.commerceRepository.delete({id});


  }


  async PostCommerce(data: CreateCommerceDto) {
    const commerce =this.commerceRepository.create(data);
    await this.commerceRepository.save(data);
    return commerce;
    
  }

 async FindRand()
        {

            return await this.commerceRepository
                .createQueryBuilder()
                .orderBy('RAND()')
                .getMany();

  }

public async SetAvatar(id: number,AvatarUrl: string){
      this.commerceRepository.update(id,{Avatar:AvatarUrl});
}
public async setVideo(id: number,videoUrl:string){
  this.commerceRepository.update(id,{video:videoUrl})
}
// sort les commerçant de façon aléatoire ayant payer l'association
async FindAbonnerRand(){
      return await this.commerceRepository.query('SELECT*FROM commerce WHERE Abonner = "Payer" ORDER BY RAND();')

}

}
