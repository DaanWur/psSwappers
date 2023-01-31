import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GameSchema, Game } from './game.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, minlength: 2, maxlength: 15 })
  nickName: string;

  @Prop({ required: true, minlength: 5, maxlength: 20 })
  fullName: string;

  @Prop({ required: true, minlength: 10, maxlength: 10 })
  phoneNum: string;

  @Prop({ required: true, minlength: 6, maxlength: 30 })
  mail: string;

  @Prop({ type: GameSchema })
  gameList: Game[];

  @Prop()
  friends: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
