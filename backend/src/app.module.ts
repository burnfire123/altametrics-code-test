import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InvoiceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
