import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/env';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(envs.mongodb),
    TaskModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
