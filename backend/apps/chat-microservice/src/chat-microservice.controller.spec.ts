import { Test, TestingModule } from '@nestjs/testing';
import { ChatMicroserviceController } from './chat-microservice.controller';
import { ChatMicroserviceService } from './chat-microservice.service';

describe('ChatMicroserviceController', () => {
  let chatMicroserviceController: ChatMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChatMicroserviceController],
      providers: [ChatMicroserviceService],
    }).compile();

    chatMicroserviceController = app.get<ChatMicroserviceController>(ChatMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(chatMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
