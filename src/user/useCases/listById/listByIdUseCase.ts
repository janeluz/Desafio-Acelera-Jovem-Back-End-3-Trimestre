
import { IUsersRepository } from "user/dto/IUsersRepository";



class ListByIdUseCase {
    constructor(private usersRepository:IUsersRepository) {}
    
    async execute(id: string): Promise<any> {
        const task = await this.usersRepository.findById(id);
    
        return task;
    }
}

export { ListByIdUseCase };
  