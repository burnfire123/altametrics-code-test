import {
  Inject,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { IncomingMessage } from 'http';
import { IUserService } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(UserService) private userService: IUserService) {}
  async use(req: IncomingMessage, res: any, next: () => void) {
    const unauthorizedException = new UnauthorizedException();
    const { authorization } = req.headers;
    if (!authorization) {
      throw unauthorizedException;
    }
    const bearerToken = authorization.substring('Bearer '.length);
    if (!(await this.userService.authorize(bearerToken))) {
      throw unauthorizedException;
    }
    next();
  }
}
