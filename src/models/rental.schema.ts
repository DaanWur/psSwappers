import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GameSchema, Game } from './game.schema';
import { UserSchema, User } from './user.schema';

export type RentalDocument = HydratedDocument<Rental>;

@Schema()
export class Rental {
  @Prop({ required: true })
  rentalDate: Date;

  @Prop({ required: true })
  returnDate: Date;

  @Prop({ required: true, type: UserSchema })
  user: User;

  @Prop({ required: true, type: GameSchema })
  game: Game;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
