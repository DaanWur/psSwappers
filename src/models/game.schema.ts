import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

<<<<<<< HEAD
const game = Mongoose.model('Game', new Mongoose.Schema({}));



=======
export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true, minlength: 5, maxlength: 50 })
  title: string;

  @Prop({ required: true, minlength: 5, maxlength: 200 })
  description: string;

  @Prop({ required: false, default: 0, min: 0, max: 5 })
  rating: number;

  //   @Prop({required:true, type:userSchema })
  //   owner:
}

export const GameSchema = SchemaFactory.createForClass(Game);
>>>>>>> bdec46ca5da108ec3be1910552ef5490208353c5
