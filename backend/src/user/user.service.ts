import { Injectable, HttpException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create_user_dto'

@Injectable()
export class UserService {
    user = CreateUserDTO;

    getUsers(): Promise<any> {
        return new Promise(resolve => {
          resolve(this.user);
        });
    }

    addUser(user): Promise<any> {
        console.log(user);
        return new Promise(resolve => {
          this.user;
          resolve(this.user);
        });
      }
}
