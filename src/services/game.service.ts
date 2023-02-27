import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from '../models/game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

  create(game: Game): Promise<Game> {
    const createdGame = new this.gameModel(game);
    if (!createdGame)
      throw new HttpException(
        `${createdGame} was not added to DB`,
        HttpStatus.CONFLICT,
      );
    return createdGame.save();
  }

  findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }
}
