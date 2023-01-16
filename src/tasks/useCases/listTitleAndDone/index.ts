import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";
import { ListTitleAndDoneController } from "./listTitleAndDoneController";
import { ListTitleAndDoneUseCase } from "./listTitleAndDoneUseCase";


const tasksRepository = new TasksRepository();
const listTitleAndDoneUseCase = new ListTitleAndDoneUseCase(tasksRepository);
const listTitleAndDoneController = new ListTitleAndDoneController(listTitleAndDoneUseCase);

export { listTitleAndDoneController };

