import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from 'src/models/user.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async register(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async validateUser(nickName: string, pass: string): Promise<User> {
    try {
      const user = await await this.userModel.findOne({ nickName: nickName });
      // const isMatch = await bcrypt.compare(password, hash);

      if (user && (await bcrypt.compare(pass, user.password))) {
        const { password, ...result } = user;
        // return result;
        console.log(result);
      } else {
        throw new NotFoundException('User cannot be found', {
          cause: new Error(),
        });
      }
      return null;
    } catch (err) {
      throw new NotFoundException('User cannot be found', {
        cause: new Error(),
        description: { ...err['keyValue'] },
      });
    }
  }
}
