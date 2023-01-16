import { ITasksRepository } from '../../../tasks/entities/repositories/ITasksRepository';

class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(
    _id: string,
    title: string,
    description: string,
    user_id: string,
    done: boolean
  ): Promise<Response> {
    const task = await this.tasksRepository.update({
      _id,
      title,
      description,
      user_id,
      done
    });

    return task;
  }
}

export { UpdateTaskUseCase };
