import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CalculatorController } from './calculator/calculator.controller';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [UserModule, CalculatorModule],
  controllers: [AppController, UserController, CalculatorController],
  providers: [AppService, UserService, CalculatorService],
})
export class AppModule {}
