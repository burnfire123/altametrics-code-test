import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { SeedModule } from './src/seed/seed.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedModule);
  await app.select(CommandModule).get(CommandService).exec();
}

bootstrap();
