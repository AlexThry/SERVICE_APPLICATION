import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
