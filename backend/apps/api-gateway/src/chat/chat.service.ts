import { CHAT_PATTERN } from '@app/contracts/chat.pattern';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ChatService {
  constructor(@Inject('CHAT_CLIENT') private chatClient: ClientProxy) {}

  findOrCreateConversation(userIds: string[], name?: string) {    
    return this.chatClient.send(CHAT_PATTERN.FIND_CREATE_CONVERSATION, { userIds, name });
  }

  getUserConversations(userId: string) {
    return this.chatClient.send(CHAT_PATTERN.FIND_USER_CONVERSATION, { userId });
  }

  getMessages(conversationId: string, page: number) {
    return this.chatClient.send(CHAT_PATTERN.GET_MESSAGES, { conversationId, page });
  }
}
