import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";
import { DeleteController } from "./deleteController";
import { DeleteTaskUseCase } from "./deleteUseCase ";



const tasksRepository = new TasksRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);
const deleteTaskController = new DeleteController(deleteTaskUseCase);

export { deleteTaskController };
