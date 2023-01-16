import { Router } from 'express';
import { listByIdController } from '../user/useCases/listById';
import { createUserController } from '../user/useCases/createUser';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get('/:id', (request, response) => {
  return  listByIdController.handle(request, response);
});

export { usersRoutes };
