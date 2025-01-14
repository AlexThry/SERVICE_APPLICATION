import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import * as Y from 'yjs';

export type noteDocument = Note & Document;

@Schema()
export class Note {
  @Prop({ default: '' })
  content: string;

  @Prop({ required: false })
  title: string;

  @Prop()
  ownerId: Types.ObjectId;

  @Prop()
  participants: Types.ObjectId[];
}

export const NoteSchema = SchemaFactory.createForClass(Note );
