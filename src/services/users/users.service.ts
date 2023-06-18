import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../models/user.schema';
import { Model } from 'mongoose';

import { AuthService } from '../auth/auth.service';
// This should be a real class/interface representing a user entity
// export type User = User;

@Injectable()
export class UsersService {
  private readonly logger = new Logger('usersService');

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private authService: AuthService,
  ) {}

  async create(user: User) {
    try {
      const hash = await this.authService.register(user.password);
      this.logger.error('User created', user);

      return await this.userModel.create({
        nickName: user.nickName,
        password: hash,
        phoneNum: user.phoneNum,
        mail: user.mail,
        fullName: user.fullName,
      });
    } catch (err) {
      this.logger.error(err);
      throw new BadRequestException('User cannot be created', {
        cause: new Error(),
        description: { ...err['keyValue'] },
      });
    }
  }

  async findOne(nickName: any) {
    return await this.userModel.findOne({ nickName: nickName });
  }
}
