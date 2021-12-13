import { Injectable } from '@nestjs/common';
import { NumberDTO } from './dto/number_dto'

@Injectable()
export class CalculatorService {
    numDTO = NumberDTO

    add(numDTO): Promise<any> {
        console.log(numDTO);
        return new Promise(resolve => {
            let sum;
            sum = Number(numDTO.number1) + Number(numDTO.number2);
            console.log(sum);
            //this.numDTO;
            resolve(sum);
          });
    }
}
