import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
