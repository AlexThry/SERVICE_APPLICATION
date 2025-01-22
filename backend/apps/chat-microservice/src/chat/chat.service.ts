import { Conversation } from '@app/dtos/chat/conversation.schema';
import { Message } from '@app/dtos/chat/message.schema';
import { User } from '@app/dtos/users/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<Conversation>,
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // Créer ou récupérer une conversation
  async findOrCreateConversation(
    userIds: string[],
    name?: string,
  ): Promise<Conversation> {
    let conversation = await this.conversationModel.findOne({
      participants: { $size: userIds.length, $all: userIds },
    });
    if (!conversation) {
      conversation = new this.conversationModel({
        participants: userIds,
        name: name,
      });
      await conversation.save();
    }
    return conversation;
  }

  async findConversations(userId: string) {
    const conversations = await this.conversationModel
      .find({ participants: userId })
      .sort({ updatedAt: -1 })
      .exec();
    const populatedConversations = await Promise.all(
      conversations.map(async (conversation) => {
        const participants = await this.userModel
          .find({ _id: { $in: conversation.participants } }, '_id username')
          .exec();
        const lastMessage = await this.messageModel
          .findOne({ conversationId: conversation._id })
          .sort({ createdAt: -1 })
          .exec();
        return {
          ...conversation.toObject(),
          participants: participants.map((participant) => ({
            id: participant._id,
            username: participant.username,
          })),
          lastMessage: lastMessage ? lastMessage.toObject() : null,
        };
      }),
    );
    return populatedConversations;
  }

  async isUserInConversation(conversationId, userId) {
    const conversation = await this.conversationModel
      .findById(conversationId)
      .exec();
    if (!conversation) {
      throw new Error('Conversation not found');
    }
    return conversation.participants.includes(userId);
  }

  async addMessage(
    conversationId: string,
    senderId: string,
    messageType: string,
    content: string,
  ): Promise<Message> {
    const message = new this.messageModel({
      conversationId,
      senderId,
      messageType,
      content,
    });
    console.log(content);

    await this.conversationModel.findByIdAndUpdate(conversationId, {
      updatedAt: new Date(),
    });
    return message.save();
  }

  async getMessages(conversationId: string, page: number, nbElements: number) {
    const messages = await this.messageModel
      .find({ conversationId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * nbElements)
      .limit(nbElements)
      .exec();

    messages.reverse();

    const uniqueSenderIds = [
      ...new Set(messages.map((message) => message.senderId)),
    ];
    const senders = await this.userModel
      .find({ _id: { $in: uniqueSenderIds } }, '_id username')
      .exec();

    const senderMap = new Map(
      senders.map((sender) => [sender._id.toString(), sender.username]),
    );

    const messagesWithUsernames = messages.map((message) => ({
      ...message.toObject(),
      senderUsername: senderMap.get(message.senderId.toString()),
    }));

    return messagesWithUsernames;
  }
}
