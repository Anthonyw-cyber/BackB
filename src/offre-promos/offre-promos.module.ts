import { Module } from '@nestjs/common';
import {OffrePromosEntity} from './offre-promos.entity';
import {TypeOrmModule} from "@nestjs/typeorm";
import { OffrePromosService } from './offre-promos.service';
import { OffrePromosController } from './offre-promos.controller';
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";
@Module({ imports: [TypeOrmModule.forFeature([OffrePromosEntity]),MulterModule.registerAsync({
        useFactory: () => ({
            dest: './tmp/uploads/offre',
            storage: diskStorage({
                destination: './tmp/uploads/offre',
                filename: (req, file, cb) => {
                    const { originalname } = file;
                    const fileExtension = `.${ originalname.split('.').pop() }`;
                    const fileName = originalname.replace(fileExtension, '').replace(/(\W+)/gm, '-');
                    cb(null, `${ Date.now() }-${ fileName + fileExtension }`);
                },
            }),
            limits: { fileSize: 8 * 1000000 } // max file size 8MB
        }),
    }),],
    controllers: [ OffrePromosController],
    providers: [ OffrePromosService]})
export class OffrePromosModule {}
