import { Test, TestingModule } from '@nestjs/testing';
import { CalcutatorController } from './calcutator.controller';

describe('CalcutatorController', () => {
  let controller: CalcutatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcutatorController],
    }).compile();

    controller = module.get<CalcutatorController>(CalcutatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
