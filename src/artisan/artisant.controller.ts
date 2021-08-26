import {
  BadRequestException,
  Body,
  Controller,

  Delete,
  Get, HttpCode, HttpStatus, NotFoundException,
  Param,

  Patch,
  Post,
  Query, Req, Res, UploadedFile, UploadedFiles, UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse, ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags
} from '@nestjs/swagger';

import { CreateArtisantDto } from './dto/create.artisant.dto';
import { Artisant } from './entity/artisant.entity';
import { ArtisantService } from './artisant.service';
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express"

import {root} from "rxjs/internal-compatibility";
import {diskStorage} from "multer";
import { extname } from  'path';
import { PatchArtisantDto } from './dto/patch.artisant.dto';

@ApiTags('artisant')
@Controller('Artisants')
export class ArtisantController {
  constructor(
    private readonly artisantService: ArtisantService,


  ) {}

  @Get()
    async getallArtisant(){
    return{
      statusCode: HttpStatus.OK,
      data: await this.artisantService.findAllArtisant(),
    };

  }
  @Get('rand')
  async  getRand(){
    return {

      data: await this.artisantService.findRand(),
    }
  }
  @Get('AbonnerRand')
  async  FindAbonner(){
    return {

      data: await this.artisantService.findAbonnerRand(),
    }
  }
  @Get(':artisantID')
  async getArtisantByID(@Param('artisantID') id: number,)
  {
    return{
      statusCode: HttpStatus.OK,
      data: await this.artisantService.getArtisantByID(id),

    };
  }

  @Post()
    async createArtisant(@Body() data: CreateArtisantDto){
    return{
      statusCode: HttpStatus.OK,
      message: 'Artisant addes Succesfully',
      data: await this.artisantService.postArtisant(data)
    };
  }




  @Patch(':artisantID')
  async updatecommerce(@Param('artisantID') commerceID: number,@Body() data: CreateArtisantDto) {

    return {
      statusCode: HttpStatus.OK,
      message: 'Artisant successfully updated',
      data: await this.artisantService.updateArtisant(commerceID, data)
    };
  }

  @Delete(':id')
  async deletecommerce(@Param('id') id: number){
    await this.artisantService.deleteArtisant(id);
    return{
      statusCode: HttpStatus.OK,
      message:'commerce deleted successfully',
    };
  }


  // partie qui gère les photo
  //Get permet de donner les photos
  @Get('artisant/:name')
  async  serverAvatar(@Param('name') name: string, @Res() res) : Promise<any>{
    res.sendFile(name,{root:'./tmp/uploads/artisant'})
  }
  //Permet d'ajouter des photo Atention il faut que l'artisan soit déjà  crée
  @Patch(':userid/avatar')
  @UseInterceptors(FileInterceptor('file',
      {
        storage: diskStorage({
          destination: './tmp/uploads/artisant',
          filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }
      )
  )
  uploadAvatar(@Param('userid') userId, @UploadedFile() file) {
    this.artisantService.SetAvatar(Number(userId), `${file.filename}`);
  }

//ajout de video
@Patch(':userid/video')
@UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        destination: './tmp/uploads/artisant',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    }
    )
)
uploadVideo(@Param('userid') userId, @UploadedFile() file) {
  this.artisantService.setVideo(Number(userId), `${file.filename}`);
}









}
