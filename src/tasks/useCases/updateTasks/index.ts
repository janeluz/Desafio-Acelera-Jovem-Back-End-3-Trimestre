import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";
import { UpdateTaskController } from "./updateTaskController";
import { UpdateTaskUseCase } from "./updateTaskUseCase";



const tasksRepository = new TasksRepository();
const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export { updateTaskController };