import { NestFactory } from '@nestjs/core';
import { ChatMicroserviceModule } from './chat-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as amqplib from 'amqplib';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  // Initialiser le microservice RabbitMQ
  const rmqMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatMicroserviceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: 'chat_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  );

  rmqMicroservice.listen();

  const app = await NestFactory.create(ChatMicroserviceModule);

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(4000);
  logger.log('WebSocket Server is running on port 4000');
}

bootstrap();
