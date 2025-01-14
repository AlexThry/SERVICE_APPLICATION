import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from '@app/dtos/notes/note.schema';
import { User, UserSchema } from '@app/dtos/users/user.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: Note.name, schema: NoteSchema },
        { name: User.name, schema: UserSchema },
      ]),
    ],
  providers: [NotesService],
  controllers: [NotesController]
})
export class NotesModule {}
