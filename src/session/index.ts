import { UsersRepository } from '../user/repositories/usersRepository';
import { SessionController } from './createSessionController';
import { CreateSessionUseCase } from './createSessionUseCase';

const usersRepository = new UsersRepository();
const createSessionUseCase = new CreateSessionUseCase(usersRepository);
const sessionController = new SessionController(createSessionUseCase);

export { sessionController };
