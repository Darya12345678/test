import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, RequestController],
  providers: [AppService],
})
export class AppModule {}
