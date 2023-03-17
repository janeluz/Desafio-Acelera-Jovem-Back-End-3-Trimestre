import { ListByIdUseCase } from './listByIdUseCase';
import { Request, Response } from 'express';

class ListByIdController {
  constructor(private listByIdUseCase: ListByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const task = await this.listByIdUseCase.execute(id);
      return response.status(200).json(task);
    } catch (err) {
      return response.status(400).json('Error');
    }
  }
}

export { ListByIdController };
