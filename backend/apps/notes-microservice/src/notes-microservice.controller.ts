import { Controller, Get } from '@nestjs/common';
import { NotesMicroserviceService } from './notes-microservice.service';

@Controller()
export class NotesMicroserviceController {
  constructor(private readonly notesMicroserviceService: NotesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.notesMicroserviceService.getHello();
  }
}
