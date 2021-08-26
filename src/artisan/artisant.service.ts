import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { CreateArtisantDto } from './dto/create.artisant.dto';
import { PatchArtisantDto } from './dto/patch.artisant.dto';
import { Artisant } from './entity/artisant.entity';




@Injectable()
export class ArtisantService {

  constructor(@InjectRepository(Artisant) private readonly artisantRepository: Repository<Artisant>,
 ) {}

    async findAllArtisant() {

        return await this.artisantRepository.find();
    }

  async getArtisantByID(id: number) {
    return await this.artisantRepository.findOne({where:{id}});
  }


  async updateArtisant(id: number, data: Partial<PatchArtisantDto>) {
    await this.artisantRepository.update({id},data);
    return await this.artisantRepository.findOne({id});

  }
  async deleteArtisant(id: number) {
    await this.artisantRepository.delete({id});


  }


  async postArtisant(data: CreateArtisantDto) {
    const Artisant =this.artisantRepository.create(data);
    await this.artisantRepository.save(data);
    return Artisant;
    
  }

 async findRand()
        {

            return await this.artisantRepository
                .createQueryBuilder()
                .orderBy('RAND()')
                .getMany();

  }

public async SetAvatar(id: number,AvatarUrl: string){
      this.artisantRepository.update(id,{Avatar:AvatarUrl});
}
public async setVideo(id: number,videoUrl:string){
  this.artisantRepository.update(id,{video:videoUrl})
}
// sort les commerçant de façon aléatoire ayant payer l'association
async findAbonnerRand(){
      return await this.artisantRepository.query('SELECT*FROM artisant WHERE Abonner = "Payer" ORDER BY RAND();')
     /*     .createQueryBuilder()
          .where('artisant.Abonner = "Payer"')
          .orderBy('RAND()')
          .getMany();*/

}

}
