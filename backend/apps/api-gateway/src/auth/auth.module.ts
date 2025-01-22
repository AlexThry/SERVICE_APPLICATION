import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USERS_CLIENT',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
                    queue: 'users_queue',
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
