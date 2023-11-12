import {
  Body,
  Controller,
  Inject,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { IUserService } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { IAuthController } from './auth.interface';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(@Inject(UserService) private userService: IUserService) {}
  @Post('/login')
  login(
    @Body() { email, password }: { email: string; password: string },
  ): Promise<string> {
    const loginError = new UnauthorizedException('Login failed');
    if (!(email && password)) {
      throw loginError;
    }
    return this.userService.login(email, password);
  }
}
