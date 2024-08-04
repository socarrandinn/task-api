import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({
    index: true,
  })
  task: string;

  @Prop({
    default: false,
  })
  completed?: boolean;

  @Prop({
    index: true,
    default: () => new Date(),
  })
  createdAt?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
