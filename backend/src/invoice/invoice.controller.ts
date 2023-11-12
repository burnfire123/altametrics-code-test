import {
  ConflictException,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { IInvoiceController, IInvoiceService } from './invoice.interface';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController implements IInvoiceController {
  constructor(@Inject(InvoiceService) private service: IInvoiceService) {}
  @Get()
  getAll(): Promise<Invoice[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Invoice> {
    const numberId = Number.parseInt(id);
    if (isNaN(numberId)) {
      throw new ConflictException('Id must be a number');
    }
    const result = await this.service.findById(numberId);
    if (!result) {
      throw new NotFoundException(`Invoice having id ${id} not found.`);
    }
    return result;
  }
}
