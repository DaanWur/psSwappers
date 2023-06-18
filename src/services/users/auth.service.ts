import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(nickName: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(nickName);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
