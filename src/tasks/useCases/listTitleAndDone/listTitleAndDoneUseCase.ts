import { ITasksRepository } from "../../../tasks/entities/repositories/ITasksRepository";



class ListTitleAndDoneUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(title:string,done: boolean): Promise<any> {
        const tasks = await this.tasksRepository.listTitleAndDone( title,done);

        return tasks;
    }
}

export { ListTitleAndDoneUseCase };