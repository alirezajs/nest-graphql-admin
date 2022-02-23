import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOperatorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  Id: number;

  @Field(() => String)
  Name: string;
}
