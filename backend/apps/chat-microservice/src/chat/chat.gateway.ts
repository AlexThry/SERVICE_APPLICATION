import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) {}

  

  async handleConnection(client: Socket) {
    const clients = Array.from(this.server.sockets.sockets.values()).map((socket) => socket.id);
    console.log('Connected clients:', clients);
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    client: Socket,
    payload: {
      conversationId: string;
      messageType: string;
      senderId: string;
      content: string;
    },
  ) {
    const { conversationId, senderId, messageType, content } = payload;

    const message = await this.chatService.addMessage(
      conversationId,
      senderId,
      messageType,
      content,
    );    

    this.server.to(conversationId).emit('receiveMessage', message);

  }

  @SubscribeMessage('joinConversation')
  async handleJoinConversation(
    client: Socket,
    payload: { conversationId: string, userId: string },
  ) {

    const { conversationId, userId } = payload;
    const isUserInConversation = await this.chatService.isUserInConversation(conversationId, userId);

    if (!isUserInConversation) {
      client.emit('error', 'User is not part of the conversation');
      return;
    }
    client.join(conversationId);
  }

  @SubscribeMessage('leaveConversation')
  async handleLeaveConversation(client: Socket) {
    const rooms = Array.from(client.rooms);
    rooms.forEach((room) => {
      if (room !== client.id) {
        client.leave(room);
      }
    });
  }
}
