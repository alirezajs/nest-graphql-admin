import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Operator {
  @Field(() => Int)
  Id: number;


  @Field(() => Int)
  Name: string;
  
}
