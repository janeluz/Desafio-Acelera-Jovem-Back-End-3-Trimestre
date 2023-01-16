import { connection } from 'mongoose';
import { ICreateTasksDTO } from '../../../../tasks/dto/ICreateUser';
import { Task } from '../../../../tasks/entities/Task';
import { ITasksRepository } from '../ITasksRepository';

class TasksRepository implements ITasksRepository {
  constructor() {
    connection;
  }

  async create({ title, description,user_id,done }: ICreateTasksDTO): Promise<any> {
    const task = Task.create({ title, description ,user_id,done});
    return task;
  }

  async listTitleAndDone(): Promise<unknown[]> {
    
    const tasks = await Task.find();
    return tasks;
    
  }

  async findById(_id: string) {
    const task = Task.findById(_id);
    return task;
  }
  async update({ _id, title, description, user_id,done }: ICreateTasksDTO): Promise<any> {
    const task = Task.findOneAndUpdate({_id, title, description,user_id,done });
    return task;
  }
  async delete(id: string): Promise<void> {
    await Task.deleteOne({ _id: id });
  }
}

export { TasksRepository };
