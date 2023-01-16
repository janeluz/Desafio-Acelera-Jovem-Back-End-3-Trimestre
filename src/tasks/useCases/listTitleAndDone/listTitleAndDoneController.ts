import { ListTitleAndDoneUseCase } from './listTitleAndDoneUseCase';

class ListTitleAndDoneController {
  constructor(private listTitleAndDoneUseCase: ListTitleAndDoneUseCase) {}

  handle(request: any, response: any): Promise<any> {
    const { title, done } = request.params;
  
    try {
      const tasks = this.listTitleAndDoneUseCase.execute(title, done);
      return response.json(tasks);
    } catch (err) {
      return response.status(400).json('Error');
    }
  }
}

export { ListTitleAndDoneController };
