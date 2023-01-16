import { CreateTasksUseCase } from './createTasksUseCase';
import { Request, Response } from 'express';
import validator from 'validator';

class CreateTasksController {
  constructor(private createTasksUseCase: CreateTasksUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, user_id, done } = request.body;
    if(!validator.isLength(title,{ min: 6})) {
      return response.status(400).send({ error: 'Invalid title' });
    }
    if(!validator.isLength(description,{ min: 6})) {
      return response.status(400).send({ error: 'Invalid description' });
    }
    if(!validator.isLength(user_id,{ min: 6})) {
      return response.status(400).send({ error: 'Invalid user_id' });
    }
    if(!validator.isBoolean(done)) {
      return response.status(400).send({ error: 'Invalid done' });
    }

    try {
      const task = await this.createTasksUseCase.execute({
        title,
        description,
        user_id,
        done,
      });
      return response.status(201).send(task);
    } catch (err) {
      return response.status(400).json('Task not created');
    }
  }
}

export { CreateTasksController };
