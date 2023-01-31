import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GameSchema, Game } from './game.schema';

export type RentalDocument = HydratedDocument<Rental>;

@Schema()
export class Rental {
  @Prop({ required: true })
  rentalDate: Date;

  @Prop({ required: true })
  returnDate: Date;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true, type: GameSchema })
  game: Game;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
