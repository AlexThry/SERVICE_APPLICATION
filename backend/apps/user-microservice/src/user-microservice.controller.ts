import { Controller, Get } from '@nestjs/common';
import { UserMicroserviceService } from './user-microservice.service';

@Controller()
export class UserMicroserviceController {
  constructor(private readonly userMicroserviceService: UserMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.userMicroserviceService.getHello();
  }
}
