import { UpdateTaskUseCase } from "./updateTaskUseCase";
import { Request, Response } from "express";


class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const { title, description,user_id,done } = request.body;

    const task = await this.updateTaskUseCase.execute(
        _id,
        title,
        description,
        user_id,
        done,
    );
      
    return response.json(task);
    }
}

export { UpdateTaskController };