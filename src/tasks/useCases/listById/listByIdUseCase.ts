import { ITasksRepository } from "tasks/entities/repositories/ITasksRepository";



class ListByIdUseCase {
    constructor(private tasksRepository: ITasksRepository) {}
    
    async execute(id: string): Promise<any> {
        const task = await this.tasksRepository.findById(id);
    
        return task;
    }
}

export { ListByIdUseCase };
  