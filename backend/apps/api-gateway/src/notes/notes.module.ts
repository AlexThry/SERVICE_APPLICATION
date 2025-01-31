import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NOTES_CLIENT',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        brokers: ['kafka:9092'],
                    },
                    consumer: {
                        groupId: 'notes-consumer'

                    }
                },
            },
        ]),
    ],
    controllers: [NotesController],
    providers: [NotesService],
})
export class NotesModule {}
