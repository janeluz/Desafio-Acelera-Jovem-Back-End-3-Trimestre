import { TasksRepository } from "../../../tasks/entities/repositories/implementations/TasksRepository";
import { ListByIdController } from "./listByIdController";
import { ListByIdUseCase } from "./listByIdUseCase";


const tasksRepository = new TasksRepository();
const listByIdUseCase = new ListByIdUseCase(tasksRepository);
const listByIdController = new ListByIdController(listByIdUseCase);

export { listByIdController };