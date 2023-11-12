import { User } from '@prisma/client';

export interface IUserService {
  login(email: string, password: string): Promise<string>;
  register(email: string, name: string, password: string): Promise<User>;
  authorize(token: string): Promise<boolean>;
}
