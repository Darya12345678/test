import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ApiResponse } from './models/api-response.model';

@Controller('api/v1/request')
export class RequestController {
  @Post()
  async processRequest(@Body() request: { wait: number; answer: string }): Promise<ApiResponse> {
    const { wait, answer } = request;

    // Валидация входных параметров
    if (wait < 0 || answer.length < 3) {
      throw new BadRequestException('Invalid input parameters');
    }

    // Ожидание указанное количество секунд
    await new Promise(resolve => setTimeout(resolve, wait * 1000));

    // Возврат ответа
    return { answer };
  }
}