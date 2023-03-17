import { UsersRepository } from '../user/repositories/usersRepository';
import { CreateSessionController } from './createSessionController';
import { CreateSessionUseCase } from './createSessionUseCase';

const usersRepository = new UsersRepository();
const createSessionUseCase = new CreateSessionUseCase(usersRepository);
const createSessionController = new CreateSessionController(createSessionUseCase);

export { createSessionController };
