import { DeleteTaskUseCase } from './deleteUseCase ';
import { Request, Response } from 'express';
class DeleteController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const tasks = await this.deleteTaskUseCase.execute(id);
      return response.json(tasks);
    } catch (err) {
      return response.status(400).json('Error delete task');
    }
  }
}

export { DeleteController };
