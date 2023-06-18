import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Game } from '../../models/game.schema';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gamesService: GameService) {}

  @Post()
  async create(@Body() createGame: Game) {
    const res = await this.gamesService.create(createGame);
    console.log(res);
    if (!res) {
      throw new HttpException(
        `${createGame} was not added to DB`,
        HttpStatus.CONFLICT,
      );
    }
    return res;
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }
}
