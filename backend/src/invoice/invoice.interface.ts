import { Invoice } from '@prisma/client';

export interface IInvoiceService {
  getAll(): Promise<Invoice[]>;
  findById(id: number): Promise<Invoice>;
}

export interface IInvoiceController {
  getAll(): Promise<Invoice[]>;
  findById(id: string): Promise<Invoice>;
}
