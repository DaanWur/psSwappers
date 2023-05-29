import { IsNumber, IsString } from 'class-validator';
import { UserSchema } from 'src/models/user.schema';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GameFields {
  @Field(() => String, {
    nullable: false,
    description: 'The games title',
  })
  @IsString()
  title: string;

  @Field(() => String, {
    nullable: false,
    description: 'The games description',
  })
  @IsString()
  description: string;

  @Field(() => Number, {
    nullable: true,
    description: 'The games rating',
  })
  @IsNumber()
  rating: number;
}
