import { Test, TestingModule } from '@nestjs/testing';
import { OperatorsResolver } from './operators.resolver';
import { OperatorsService } from './operators.service';

describe('OperatorsResolver', () => {
  let resolver: OperatorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperatorsResolver, OperatorsService],
    }).compile();

    resolver = module.get<OperatorsResolver>(OperatorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
