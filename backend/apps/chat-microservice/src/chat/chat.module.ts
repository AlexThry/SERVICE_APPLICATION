import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Conversation,
  ConversationSchema,
} from '@app/dtos/chat/conversation.schema';
import { Message, MessageSchema } from '@app/dtos/chat/message.schema';
import { ChatController } from './chat.controller';
import { User, UserSchema } from '@app/dtos/users/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Conversation.name, schema: ConversationSchema },
      { name: Message.name, schema: MessageSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
