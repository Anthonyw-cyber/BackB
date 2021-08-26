import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Param,
    ParseIntPipe,
    Patch,
    Query, Res, UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PatchEvenementDto } from './dto/patch.Evenement.dto';
import { evenement } from './evenement.entity';

import { EvenementService } from './evenement.service';


import {
  Get,
  Post,

  HttpStatus,
} from '@nestjs/common';
import {CreateEvenementDto} from "./dto/create.Evenement.dto";
import path, {extname} from "path";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
@ApiTags('evenement')
@Controller('evenement')
export class EvenementController {
    constructor(private readonly evenementService: EvenementService) {
    }


    @Get()
    async getall() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.evenementService.getEvenementall(),
        };
    }

    @Post()
    async createEvent(@Body() data: CreateEvenementDto) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Event added successfully',
            data: await this.evenementService.createEvenement(data)
        }


    }

    @Get(':evenementID')
    async getEventByID(@Param('evenementID') evenementID: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.evenementService.getbyID(evenementID),
        }
    }
    @Get('rand')
    async  getRand(){
        return {

            data: await this.evenementService.FindRand(),
        }
    }

    @Patch(':eventID')
    async updateEvent(@Param('eventID') eventID: number, @Body() data: PatchEvenementDto) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Event successfully updated',
            data: await this.evenementService.updateEvent(eventID, data)
        }
    }

    @Delete(':id')
        async deleteevent(@Param('id') id: number){
        await this.evenementService.deleteEvent(id);
        return{
            statusCode: HttpStatus.OK,
            message:'Event deleted successfully',
        };
    }
    @Patch(':userid/avatar')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './tmp/uploads/event',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    return cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        }
        )
    )
    uploadAvatar(@Param('userid') userId, @UploadedFile() file) {
        this.evenementService.SetAvatar(Number(userId), `${file.filename}`);
    }
    @Get('event/:name')
    async  serverAvatar(@Param('name') name: string, @Res() res) : Promise<any>{
        res.sendFile(name,{root:'./tmp/uploads/event'})
    }
}
