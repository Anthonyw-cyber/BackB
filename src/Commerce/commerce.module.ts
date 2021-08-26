import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceController } from './commerce.controller';
import { commerce } from './entity/commerce.entity';
import { CommerceService } from './commerce.service';

import {diskStorage} from "multer";
import {MulterModule} from "@nestjs/platform-express";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([commerce]),    MulterModule.registerAsync({
    useFactory: () => ({
      dest: './tmp/uploads/commerce',
      storage: diskStorage({
        destination: './tmp/uploads/commerce',
        filename: (req, file, cb) => {
          const { originalname } = file;
          const fileExtension = `.${ originalname.split('.').pop() }`;
          const fileName = originalname.replace(fileExtension, '').replace(/(\W+)/gm, '-');
          cb(null, `${ Date.now() }-${ fileName + fileExtension }`);
        },
      }),
      limits: { fileSize: 8 * 1000000 } // max file size 8MB
    }),
  }),
],
  controllers: [CommerceController],
  providers: [CommerceService],
  exports: [CommerceService, TypeOrmModule],
})
export class CommerceModule {}
