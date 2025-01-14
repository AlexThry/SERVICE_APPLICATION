import { Controller, Get } from '@nestjs/common';
import { ChatMicroserviceService } from './chat-microservice.service';

@Controller()
export class ChatMicroserviceController {
  constructor(private readonly chatMicroserviceService: ChatMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.chatMicroserviceService.getHello();
  }
}
