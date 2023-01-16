import { CreateUserUseCase } from './createUserUseCase';
import { Request, Response } from 'express';
import validator from 'validator';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
 
  async handle(request: Request, response: Response): Promise<any> {
   
    const { name, email, password } = request.body;
    if (!validator.isLength(name, { min:3 })) {
      return response.status(400).send({ error: 'Invalid name' });
    }

    if (!validator.isEmail(email)) {
      return response.status(400).send({ error: 'Invalid email address' });
    }
    if (!validator.isLength(password, { min:6 })) {
      return response.status(400).send({ error: 'Invalid password' });
    }
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      response.status(201).json(user);
    } catch (error) {
      response.status(400).json('User not created');
    }
  }
}

export { CreateUserController };
