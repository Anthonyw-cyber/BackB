"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/config.service");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '../tmp/uploads'));
    const configService = app.get(config_service_1.ConfigService);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Baco API')
        .setDescription('')
        .setVersion(configService.get('npm_package_version') || 'UNKNOWN')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    fs.writeFileSync(`${__dirname}/../openAPI.json`, JSON.stringify(document, null, 2));
    swagger_1.SwaggerModule.setup('', app, document);
    await app.listen(Number(configService.get('NODE_PORT_INTERN')) || 3000);
    console.log('------------');
    console.log(`API started on ${configService.get('NODE_URL')}:${configService.get('NODE_PORT_EXTERN') || 3000}`);
    console.log('------------');
}
bootstrap().catch(console.error);
//# sourceMappingURL=main.js.map