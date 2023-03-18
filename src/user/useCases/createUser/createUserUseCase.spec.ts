import { CreateUserUseCase } from './createUserUseCase';

import { AppError } from 'errors/error';

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new inMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserUseCase.execute({
      name: 'User Test',
      email: 'jane@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with an existing email', async () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: 'User Test',
        email: 'jane@gmail.com',
        password: '123456',
      });

      await createUserUseCase.execute({
        name: 'User Test',
        email: "jane@gmail.com'",
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
