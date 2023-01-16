import { DeleteTaskUseCase } from './deleteUseCase ';

class DeleteController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: any, response: any): Promise<any> {
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
