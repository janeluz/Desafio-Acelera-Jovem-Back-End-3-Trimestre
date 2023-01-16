import  { connection } from 'mongoose';
import { IUsersRepository } from 'user/dto/IUsersRepository';
import { ICreateUser } from 'user/dto/userDto';
import { User } from '../../user/entities/user';

class UsersRepository implements IUsersRepository {
  constructor() {
    connection;
  }

  async create({ name, email, password }: ICreateUser): Promise<any> {
    const user = User.create({ name, email, password });
    return user;
  }
  async findAllUsers(): Promise<any> {
    const users = await User.find();
    return users;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await User.findOne({email: email});
    return user as any;
  }

  async findById(id: string) {
    const user = User.findById(id);
    return user;
  }
}

export { UsersRepository };
