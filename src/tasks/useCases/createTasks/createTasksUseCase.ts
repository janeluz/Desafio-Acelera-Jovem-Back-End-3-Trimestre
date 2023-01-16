import { ICreateTasksDTO } from "tasks/dto/ICreateUser";
import { ITasksRepository } from "tasks/entities/repositories/ITasksRepository";


class CreateTasksUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ title, description, user_id,done }: ICreateTasksDTO): Promise<any> {
    const task = this.tasksRepository.create({
      title,
      description,
      user_id,
      done
    });

    return task;
  }
}

export { CreateTasksUseCase };