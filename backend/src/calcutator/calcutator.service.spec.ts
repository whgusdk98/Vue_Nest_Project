import { Test, TestingModule } from '@nestjs/testing';
import { CalcutatorService } from './calcutator.service';

describe('CalcutatorService', () => {
  let service: CalcutatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcutatorService],
    }).compile();

    service = module.get<CalcutatorService>(CalcutatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
