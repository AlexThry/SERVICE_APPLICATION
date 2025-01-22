import { Controller } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CHAT_PATTERN } from "@app/contracts/chat.pattern";

@Controller()
export class ChatController {   
    constructor(private readonly chatService: ChatService) {}

    @MessagePattern(CHAT_PATTERN.FIND_CREATE_CONVERSATION)
    findOrCreateConversation(@Payload() payload: {userIds: string[], name: string}) {
        
        return this.chatService.findOrCreateConversation(payload.userIds, payload.name)
    }

    @MessagePattern(CHAT_PATTERN.FIND_USER_CONVERSATION) 
    find(@Payload() payload: {userId: string}) {
        return this.chatService.findConversations(payload.userId)
    }

    @MessagePattern(CHAT_PATTERN.GET_MESSAGES)
    getMessages(@Payload() payload: {conversationId: string, page: number}) {
        return this.chatService.getMessages(payload.conversationId, payload.page, 20)
    }
}
