import { ICreateUser } from './userDto';

interface IUsersRepository {
  findById(id: string): unknown;
  findByEmail(email: string): Promise<any>;
  create({ name, email, password }: ICreateUser): Promise<any>;
  findAllUsers(): Promise<any>;
}

export { IUsersRepository };
