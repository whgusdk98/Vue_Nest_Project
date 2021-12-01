import { 
    Controller,
    Get,
    Res,
    Param,
    Post,
    Body,
    Query,
    HttpStatus
 } from '@nestjs/common';
 import { UserService } from './user.service';
 import { CreateUserDTO } from './dto/create_user_dto';


@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}

    @Get('users')
    async getUsers(@Res() res) {
        const users = await this.UserService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Post('/post')
    async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO) {
      const user = await this.UserService.addUser(CreateUserDTO);
      return res.status(HttpStatus.OK).json({
            message: "Post 요청 성공! \n"+CreateUserDTO.company+" "+CreateUserDTO.name+"님 안녕하세요",
            post: user
      })
    }
}
