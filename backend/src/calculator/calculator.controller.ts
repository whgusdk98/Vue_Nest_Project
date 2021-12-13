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
import { CalculatorService } from './calculator.service';
import { NumberDTO } from './dto/number_dto';

@Controller('calculator')
export class CalculatorController {
    constructor(private CalculatorService: CalculatorService) {}

    @Post('/add')
    async add(@Res() res, @Body() NumberDTO: NumberDTO) {
      const add_num = await this.CalculatorService.add(NumberDTO);
      return res.status(HttpStatus.OK).json({
            message: "Post 요청, Sum 성공! \n"+NumberDTO.number1+" + "+NumberDTO.number2+" = "+add_num+" 입니다.",
            post: add_num
      })
    }
}
