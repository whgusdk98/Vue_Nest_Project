import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CalcutatorModule } from './calcutator/calcutator.module';

@Module({
  imports: [UserModule, CalcutatorModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
