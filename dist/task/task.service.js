"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const task_entity_1 = require("./entities/task.entity");
const mongoose_2 = require("@nestjs/mongoose");
let TaskService = class TaskService {
    constructor(taskModule) {
        this.taskModule = taskModule;
    }
    async create(createTaskDto) {
        try {
            const task = await this.taskModule.create(createTaskDto);
            return task;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Can not create task ');
        }
    }
    async findAll() {
        const tasks = await this.taskModule.find();
        return tasks;
    }
    async findOne(_id) {
        const task = this.taskModule.findById(_id);
        if (!task) {
            throw new Error('No found task');
        }
        return task;
    }
    async update(id, updateTaskDto) {
        const task = await this.findOne(id);
        await task.updateOne(updateTaskDto);
        return {
            ...task.toJSON(),
            ...updateTaskDto
        };
    }
    async remove(id) {
        const task = await this.findOne(id);
        try {
            this.taskModule.findOneAndDelete(task?._id);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Can not delete task');
        }
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(task_entity_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TaskService);
//# sourceMappingURL=task.service.js.map