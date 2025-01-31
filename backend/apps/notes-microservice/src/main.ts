import { NestFactory } from '@nestjs/core';
import { NotesMicroserviceModule } from './notes-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotesMicroserviceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:9092'],
        }
      },
    },
  );
  await app.listen();
}
bootstrap();
