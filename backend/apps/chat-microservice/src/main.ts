import { NestFactory } from '@nestjs/core';
import { ChatMicroserviceModule } from './chat-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  // Initialiser le microservice TCP
  const tcpMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatMicroserviceModule,
    {
      transport: Transport.TCP,
      options: { port: 3002 },
    },
  );

  tcpMicroservice.listen();

  const app = await NestFactory.create(ChatMicroserviceModule);

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(4000);
  logger.log('WebSocket Server is running on port 3003');
}

bootstrap();
