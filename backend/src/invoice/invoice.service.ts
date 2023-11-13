import { Inject, Injectable } from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IInvoiceService } from './invoice.interface';

@Injectable()
export class InvoiceService implements IInvoiceService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  getAll(): Promise<Invoice[]> {
    return this.prismaService.invoice.findMany({});
  }
  findById(id: number): Promise<Invoice> {
    return this.prismaService.invoice.findFirst({
      where: {
        id,
      },
      include: {
        User: {
          select: {
            password: false,
            token: false,
            email: true,
            name: true,
            id: true,
          },
        },
      },
    });
  }
}
