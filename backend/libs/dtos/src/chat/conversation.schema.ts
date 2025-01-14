import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ConversationDocument = Conversation & Document;

@Schema({ timestamps: true })
export class Conversation extends Document {
  @Prop({ type: [MongooseSchema.Types.ObjectId], required: true })
  participants: string[];

  @Prop({type: String, required: false})
  name: string;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
