import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CHAT_CLIENT',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
                    queue: 'chat_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
        AuthModule,
    ],
    controllers: [ChatController],
    providers: [ChatService],
})
export class ChatModule {}
