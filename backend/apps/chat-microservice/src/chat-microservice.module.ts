import { Module } from '@nestjs/common';
import { ChatMicroserviceController } from './chat-microservice.controller';
import { ChatMicroserviceService } from './chat-microservice.service';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ChatModule,
    MongooseModule.forRoot(
      'mongodb://mongo:27017/',
    ),
  ],
  controllers: [ChatMicroserviceController],
  providers: [ChatMicroserviceService],
})
export class ChatMicroserviceModule {}
