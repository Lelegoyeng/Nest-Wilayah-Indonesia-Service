import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableShutdownHooks();
  app.enableCors();

  // Swagger Setup
  const swaggerTheme = new SwaggerTheme();
  const config = new DocumentBuilder()
    .setTitle('Indonesia Region Service 2025')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {
    customCss: swaggerTheme.getBuffer(SwaggerThemeNameEnum.NORD_DARK),
    swaggerOptions: { persistAuthorization: true }
  });

  await app.listen(process.env.PORT, process.env.SERVER);
  const appURL = await app.getUrl();

  Logger.log(`ON ${appURL}`, 'Indonesia Regions Service');
}
bootstrap();
