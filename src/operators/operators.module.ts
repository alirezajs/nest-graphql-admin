import { Module } from '@nestjs/common';
import { OperatorsService } from './operators.service';
import { OperatorsResolver } from './operators.resolver';

@Module({
  providers: [OperatorsResolver, OperatorsService]
})
export class OperatorsModule {}
