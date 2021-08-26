import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtisantController } from './artisant.controller';
import { Artisant } from './entity/artisant.entity';
import { ArtisantService } from './artisant.service';

import {diskStorage} from "multer";
import {MulterModule} from "@nestjs/platform-express";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Artisant]),    MulterModule.registerAsync({
    useFactory: () => ({
      dest: './tmp/uploads/artisant',
      storage: diskStorage({
        destination: './tmp/uploads/artisant',
      }),
      limits: { fileSize: 8 * 1000000 } // max file size 8MB
    }),
  }),
],
  controllers: [ArtisantController],
  providers: [ArtisantService],
  exports: [ArtisantService, TypeOrmModule],
})
export class ArtisanModule {}
