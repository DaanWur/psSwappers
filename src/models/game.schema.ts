import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserSchema, User } from './user.schema';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true, minlength: 5, maxlength: 50 })
  title: string;

  @Prop({ required: true, minlength: 5, maxlength: 200 })
  description: string;

  @Prop({ required: false, default: 0, min: 0, max: 5 })
  rating: number;

  @Prop({ required: true, type: UserSchema })
  owner: User;
}

export const GameSchema = SchemaFactory.createForClass(Game);
