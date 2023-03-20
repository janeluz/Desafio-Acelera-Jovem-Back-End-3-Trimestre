
  

import { ICreateUserDTO } from "user/dto/ICreateUserDTO";

import { IUsersRepository } from "user/dto/IUsersRepository";
import { User } from "user/entities/user";

class UsersRepositoryInMemory implements IUsersRepository {
 
  users = [];

  async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push();
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  findAllUsers(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositoryInMemory };

