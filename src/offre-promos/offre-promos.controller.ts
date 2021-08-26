import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus, UseInterceptors, UploadedFile, Res,
} from '@nestjs/common';
import {OffrePromosService} from "./offre-promos.service";
import {OfferDto} from "./offerDto";
import {ApiTags} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {extname} from "path";
@ApiTags('Offre-promos')
@Controller('offre-promos')
export class OffrePromosController {constructor( private offrepromosService: OffrePromosService,){}
@Get()
    async getoffre(){
    return{
        statusCode: HttpStatus.OK,
        data: await this.offrepromosService.getalloffre(),
    };
}
@Post()
    async createUsers(@Body() data: OfferDto) {
        return {
            statusCode: HttpStatus.OK,
            message: 'User added successfully',
            data: await this.offrepromosService.create(data),
        };
    }
@Get(':id')
    async getOffreByid (@Param('id') id: number){
    return{
        statusCode: HttpStatus.OK,
        data: await this.offrepromosService.getPromoByid(id)
    };
}
@Patch(':id')
    async updateOffre(@Param('id') id: number,@Body() data: OfferDto){
    return{
        statusCode: HttpStatus.OK,
        message:'User update successfully ',
        data: await this.offrepromosService.updatePromo(id, data),
    };
}
@Delete(':id')
    async deleteUser(@Param('id') id: number){
    await this.offrepromosService.deleteByid(id)
    return {
        statusCode: HttpStatus.OK,
        message:'User deleted successfully',
    };
}
    @Get('rand')
    async  getRand(){
        return {

            data: await this.offrepromosService.FindRand(),
        }
    }
    @Patch(':userid/avatar')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './tmp/uploads/offre',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    return cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        }
        )
    )
    uploadAvatar(@Param('userid') userId, @UploadedFile() file) {
        this.offrepromosService.SetAvatar(Number(userId), `${file.filename}`);
    }

    @Get('offre/:name')
    async  serverAvatar(@Param('name') name: string, @Res() res) : Promise<any>{
        res.sendFile(name,{root:'./tmp/uploads/event'})
    }
}

