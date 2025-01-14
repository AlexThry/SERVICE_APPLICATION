import { NestFactory } from '@nestjs/core';
import { NotesMicroserviceModule } from './notes-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotesMicroserviceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: 'notes_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
