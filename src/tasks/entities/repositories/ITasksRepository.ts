import { ICreateTasksDTO } from '../../../tasks/dto/ICreateUser';

interface ITasksRepository {
  create({ title, description, user_id,done }: ICreateTasksDTO): Promise<void>;
  listTitleAndDone(title:string,done:boolean): Promise<any>;
  findById(id: string): Promise<any>;
  update({ _id, title, description,user_id, done}: ICreateTasksDTO): Promise<any>;
  delete(id: string): Promise<void>;
}

export { ITasksRepository };
