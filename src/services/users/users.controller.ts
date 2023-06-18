import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../models/user.schema';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger('users');
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  register(@Body() user: User) {
    try {
      return this.usersService.create(user);
    } catch (err) {
      this.logger.error(err);
      throw new BadRequestException('User cannot be created', {
        cause: new Error(),
        description: err,
      });
    }
  }

  @Post('login')
  async name(@Body() userCreds: any) {
    return await this.authService.validateUser(
      userCreds.nickName,
      userCreds.password,
    );
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }
}
