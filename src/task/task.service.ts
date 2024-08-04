import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {

  constructor(
    @InjectModel(Task.name)
    private readonly taskModule: Model<Task>
  ) { }

  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.taskModule.create(createTaskDto)
      return task
    } catch (error) {
      throw new InternalServerErrorException('Can not create task ')
    }
  }

  async findAll() {
    const tasks = await this.taskModule.find()
    return tasks
  }

  async findOne(_id: string) {
    const task = this.taskModule.findById(_id)
    if (!task) {
      throw new Error('No found task')
    }
    return task
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    await task.updateOne(updateTaskDto)
    return {
      ...task.toJSON(),
      ...updateTaskDto
    }
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    try {
      this.taskModule.findOneAndDelete(task?._id)
    } catch (error) {
      throw new InternalServerErrorException('Can not delete task')
    }
  }
}
