import { Module } from '@nestjs/common';
import { CalcutatorController } from './calcutator.controller';
import { CalcutatorService } from './calcutator.service';

@Module({
  controllers: [CalcutatorController],
  providers: [CalcutatorService]
})
export class CalcutatorModule {}
