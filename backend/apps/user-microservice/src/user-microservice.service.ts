import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
