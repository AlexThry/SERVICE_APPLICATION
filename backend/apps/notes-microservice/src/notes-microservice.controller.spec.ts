import { Test, TestingModule } from '@nestjs/testing';
import { NotesMicroserviceController } from './notes-microservice.controller';
import { NotesMicroserviceService } from './notes-microservice.service';

describe('NotesMicroserviceController', () => {
  let notesMicroserviceController: NotesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesMicroserviceController],
      providers: [NotesMicroserviceService],
    }).compile();

    notesMicroserviceController = app.get<NotesMicroserviceController>(NotesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
