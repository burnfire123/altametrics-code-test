import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserService } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { ISeedService } from './seed.interface';

@Injectable()
export class SeedService implements ISeedService {
  constructor(
    @Inject(UserService) private userService: IUserService,
    @Inject(PrismaService) private prismaService: PrismaService,
  ) {}
  async seed(): Promise<void> {
    const user = await this.userService.register(
      'code_test@mock.com',
      'Mock User',
      'password',
    );
    await this.prismaService.invoice.create({
      data: {
        userId: user.id,
        amount: 5,
        details: 'first invoice details',
        due_date: new Date(),
      },
    });
    await this.prismaService.invoice.create({
      data: {
        userId: user.id,
        amount: 15,
        details: 'other invoice details',
        due_date: new Date(),
      },
    });
    await this.prismaService.invoice.create({
      data: {
        userId: user.id,
        amount: 42,
        details: 'third',
        due_date: new Date(),
      },
    });
  }
}
