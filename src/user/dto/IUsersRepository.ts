import { ICreateUserDTO } from './ICreateUserDTO';

interface IUsersRepository {
  findById(id: string): unknown;
  findByEmail(email: string): Promise<any>;
  create({ name, email, password }: ICreateUserDTO): Promise<any>;
  findAllUsers(): Promise<any>;
}

export { IUsersRepository };
