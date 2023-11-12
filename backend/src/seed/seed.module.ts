import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { SeedCommand } from './seed.command';
import { SeedService } from './seed.service';

@Module({
  providers: [SeedService, SeedCommand],
  imports: [UserModule, InvoiceModule, PrismaModule, CommandModule],
})
export class SeedModule {}
