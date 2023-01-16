
import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";
import { CreateTasksController } from "./createTasksController";
import { CreateTasksUseCase } from "./createTasksUseCase";


const tasksRepository = new TasksRepository();
const createTasksUseCase = new CreateTasksUseCase(tasksRepository);
const createTasksController = new CreateTasksController(createTasksUseCase);

export { createTasksController };