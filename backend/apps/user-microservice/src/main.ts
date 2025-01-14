import { NestFactory } from '@nestjs/core';
import { UserMicroserviceModule } from './user-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserMicroserviceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: 'users_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
