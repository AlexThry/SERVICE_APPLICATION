import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Conversation', required: true })
  conversationId: string;

  @Prop({type: String, required: true})
  messageType: string

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true }) // ID de l'expéditeur
  senderId: string;

  @Prop({ type: String, required: true }) // Contenu du message
  content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
