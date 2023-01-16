import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";



class DeleteTaskUseCase {   
    constructor(private tasksRepository: TasksRepository) {}

    async execute(id: string): Promise<void> {
        await this.tasksRepository.delete(id);
    }
}

export { DeleteTaskUseCase };

