import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenementController } from './evenement.controller';
import { evenement } from './evenement.entity';
import { EvenementService } from './evenement.service';
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([evenement]), MulterModule.registerAsync({
    useFactory: () => ({
      dest: './tmp/uploads/event',
      storage: diskStorage({
        destination: './tmp/uploads/event',
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
  providers: [EvenementService],
  exports: [EvenementService, TypeOrmModule],
  controllers: [EvenementController],
})
export class EvenementModule {}
