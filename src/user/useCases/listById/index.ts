
import { UsersRepository } from "../../../user/repositories/usersRepository";
import { ListByIdController } from "./listByIdController";
import { ListByIdUseCase } from "./listByIdUseCase";


const usersRepository = new UsersRepository();
const listByIdUseCase = new ListByIdUseCase(usersRepository);
const listByIdController = new ListByIdController(listByIdUseCase);

export { listByIdController };