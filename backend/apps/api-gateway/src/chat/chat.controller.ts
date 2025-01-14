import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(AuthGuard)
  @Post('createConversation')
  async createConversation(@Body('userIds') userIds: string[], @Body('name') name?: string) {
    return this.chatService.findOrCreateConversation(userIds, name);
  }

  @UseGuards(AuthGuard)
  @Post('getUserConversations')
  async getConversations(@Body('userId') userId: string) {    
    return this.chatService.getUserConversations(userId);
  }

  @UseGuards(AuthGuard)
  @Post('getMessages')
  async getMessages(@Body('conversationId') conversationId: string, @Body('page') page: number) {
    return this.chatService.getMessages(conversationId, page);
  }
}
