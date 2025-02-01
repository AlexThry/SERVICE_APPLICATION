import { Module } from '@nestjs/common';
import { NotesMicroserviceController } from './notes-microservice.controller';
import { NotesMicroserviceService } from './notes-microservice.service';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/',
    ),
  ],
  controllers: [NotesMicroserviceController],
  providers: [NotesMicroserviceService],
})
export class NotesMicroserviceModule {}
