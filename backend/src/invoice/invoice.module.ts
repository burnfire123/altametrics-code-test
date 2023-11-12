import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  providers: [InvoiceService],
  imports: [PrismaModule],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
