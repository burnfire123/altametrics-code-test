import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserService } from './user.interface';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  async register(email: string, name: string, password: string): Promise<User> {
    const existingUser = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    if (existingUser) {
      throw new ConflictException(`User having email ${email} exists.`);
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    return this.prismaService.user.create({
      data: {
        email,
        name,
        password: passwordHash,
      },
    });
  }
  async login(email: string, password: string): Promise<string> {
    //   To be moved to controller
    const loginError = new UnauthorizedException('Login failed');
    if (!(email && password)) {
      throw loginError;
    }
    //
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw loginError;
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw loginError;
    }
    return user.token;
  }
}
