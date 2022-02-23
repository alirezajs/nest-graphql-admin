import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OperatorsService } from './operators.service';
import { Operator } from './entities/operator.entity';
import { CreateOperatorInput } from './dto/create-operator.input';
import { UpdateOperatorInput } from './dto/update-operator.input';

@Resolver(() => Operator)
export class OperatorsResolver {
  constructor(private readonly operatorsService: OperatorsService) {}

  @Mutation(() => Operator)
  createOperator(@Args('createOperatorInput') createOperatorInput: CreateOperatorInput) {
    return this.operatorsService.create(createOperatorInput);
  }

  @Query(() => [Operator], { name: 'operators' })
  findAll() {
    return this.operatorsService.findAll();
  }

  @Query(() => Operator, { name: 'operator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.operatorsService.findOne(id);
  }

  @Mutation(() => Operator)
  updateOperator(@Args('updateOperatorInput') updateOperatorInput: UpdateOperatorInput) {
    return this.operatorsService.update(updateOperatorInput.id, updateOperatorInput);
  }

  @Mutation(() => Operator)
  removeOperator(@Args('id', { type: () => Int }) id: number) {
    return this.operatorsService.remove(id);
  }
}
