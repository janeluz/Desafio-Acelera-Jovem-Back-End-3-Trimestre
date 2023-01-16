import { IUsersRepository } from '../../../user/dto/IUsersRepository';
import { hash } from 'bcryptjs';
import { ICreateUser } from '../../../user/dto/userDto';

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUser): Promise<any> {
    const usersAlreadyExists = await this.usersRepository.findByEmail(email);

    if (usersAlreadyExists) {
      throw new Error(' user Already exists!');
    }

    const passwordHash = await hash(password, 8);
    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}
export { CreateUserUseCase };
