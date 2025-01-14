import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'NOTES_CLIENT',
          transport: Transport.TCP,
          options: { port: 3003 },
        },
      ]),
    ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
