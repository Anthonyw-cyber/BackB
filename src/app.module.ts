import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { EvenementModule } from './evenement/evenement.module';
import { CommerceModule } from './Commerce/commerce.module';
import { OffrePromosModule } from './offre-promos/offre-promos.module';
import {AdminModule} from "./admin/admin.module";
import {MulterModule} from "@nestjs/platform-express"
import { AuthModule } from './auth/auth.module';
import {LoginModule} from "./Login/login.module";
import { ArtisanModule } from './artisan/artisan.module';
 



@Module({

  imports: [
      MulterModule.register({
    dest: './uploads',
  }),
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const test: any = {
          type: 'mariadb',
          host: configService.get('MYSQL_HOST'),
          port: +configService.get('MYSQL_PORT_INTERN'),
          username: configService.get('MYSQL_USER'),
          password: configService.get('MYSQL_PASSWORD'),
          database: configService.get('MYSQL_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,

        };
        console.log(JSON.stringify(test, null, 2));
        return test;
      },
      inject: [ConfigService],
    }),
    CommerceModule,
    ArtisanModule,
    EvenementModule,
    EvenementModule,
    OffrePromosModule,
    AdminModule,
    AuthModule,
    LoginModule,





  ],




})
export class AppModule {}
