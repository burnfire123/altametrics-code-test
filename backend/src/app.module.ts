import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InvoiceModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
