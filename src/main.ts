import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from 'path';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../tmp/uploads'));

  const configService = app.get<ConfigService>(ConfigService);

  const options = new DocumentBuilder()
    .setTitle('Baco API')
    .setDescription('')
    .setVersion(configService.get('npm_package_version') || 'UNKNOWN')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  fs.writeFileSync(`${__dirname}/../openAPI.json`, JSON.stringify(document, null, 2));
  SwaggerModule.setup('', app, document);

  await app.listen(Number(configService.get('NODE_PORT_INTERN')) || 3000);

  console.log('------------');
  console.log(`API started on ${configService.get('NODE_URL')}:${configService.get('NODE_PORT_EXTERN') || 3000}`);
  console.log('------------');
}

bootstrap().catch(console.error);
