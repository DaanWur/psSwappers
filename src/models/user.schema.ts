import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GameSchema, Game } from './game.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, required: true, minlength: 2, maxlength: 15 })
  nickName: string;

  @Prop({ type: String, required: true, trim: true, minlength: 8 })
  password: string;

  @Prop({ required: true, minlength: 5, maxlength: 20 })
  fullName: string;

  @Prop({ unique: true, required: true, minlength: 10, maxlength: 10 })
  phoneNum: string;

  @Prop({ unique: true, required: true, minlength: 6, maxlength: 30 })
  mail: string;

  @Prop({ type: GameSchema })
  gameList: Game[];

  @Prop()
  friends: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
