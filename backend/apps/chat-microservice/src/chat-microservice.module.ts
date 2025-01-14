import { Module } from '@nestjs/common';
import { ChatMicroserviceController } from './chat-microservice.controller';
import { ChatMicroserviceService } from './chat-microservice.service';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ChatModule,
    MongooseModule.forRoot(
      'mongodb+srv://alexist103:laS31WAxFPpgAjxV@soaproject.c2z5s.mongodb.net/?retryWrites=true&w=majority&appName=SOAProject',
    ),
  ],
  controllers: [ChatMicroserviceController],
  providers: [ChatMicroserviceService],
})
export class ChatMicroserviceModule {}
