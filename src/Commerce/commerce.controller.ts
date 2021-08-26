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

import { CreateCommerceDto } from './dto/create.commerce.dto';
import { commerce } from './entity/commerce.entity';
import { CommerceService } from './commerce.service';
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express"

import {root} from "rxjs/internal-compatibility";
import {diskStorage} from "multer";
import { extname } from  'path';
import { PatchCommerceDto } from './dto/patch.commerce.dto';

@ApiTags('commerce')
@Controller('commerces')
export class CommerceController {
  constructor(
    private readonly commerceService: CommerceService,


  ) {}

  @Get()
    async getallcommerce(){
    return{
      statusCode: HttpStatus.OK,
      data: await this.commerceService.findAllCommmerce(),
    };

  }
  @Get('rand')
  async  getRand(){
    return {

      data: await this.commerceService.FindRand(),
    }
  }
  @Get('AbonnerRand')
  async  FindAbonner(){
    return {

      data: await this.commerceService.FindAbonnerRand(),
    }
  }
  @Get(':commerceID')
  async getcommerceByID(@Param('commerceID') id: number,)
  {
    return{
      statusCode: HttpStatus.OK,
      data: await this.commerceService.getCommerceByID(id),

    };
  }

  @Post()
    async createCommerce(@Body() data: CreateCommerceDto){
    return{
      statusCode: HttpStatus.OK,
      message: 'Commerce addes Succesfully',
      data: await this.commerceService.PostCommerce(data)
    };
  }




  @Patch(':commerceID')
  async updatecommerce(@Param('commerceID') commerceID: number,@Body() data: PatchCommerceDto) {

    return {
      statusCode: HttpStatus.OK,
      message: 'Artisant successfully updated',
      data: await this.commerceService.updatecommerde(commerceID, data)
    };
  }

  @Delete(':id')
  async deletecommerce(@Param('id') id: number){
    await this.commerceService.deleteCommerce(id);
    return{
      statusCode: HttpStatus.OK,
      message:'commerce deleted successfully',
    };
  }


  // partie qui gère les photo
  //Get permet de donner les photos
  @Get('commerce/:name')
  async  serverAvatar(@Param('name') name: string, @Res() res) : Promise<any>{
    res.sendFile(name,{root:'./tmp/uploads/commerce'})
  }
  //Permet d'ajouter des photo Atention il faut que le commerçant soit déja  crée
  @Patch(':userid/avatar')
  @UseInterceptors(FileInterceptor('file',
      {
        storage: diskStorage({
          destination: './tmp/uploads/commerce',
          filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }
      )
  )
  uploadAvatar(@Param('userid') userId, @UploadedFile() file) {
    this.commerceService.SetAvatar(Number(userId), `${file.filename}`);
  }

//ajout video
@Patch(':userid/video')
@UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        destination: './tmp/uploads/commerce',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.originalname)}`)
        }
      })
    }
    )
)
uploadVideo(@Param('userid') userId, @UploadedFile() file) {
  this.commerceService.setVideo(Number(userId), `${file.filename}`);
}










}
