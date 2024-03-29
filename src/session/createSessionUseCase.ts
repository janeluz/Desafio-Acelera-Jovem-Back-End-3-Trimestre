
import auth from '../config/auth';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../user/dto/IUsersRepository';
import { compare } from 'bcryptjs';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  
}

class CreateSessionUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    console.log("teste,",user)
    const { secretToken, expiresInToken } = auth;

    if (!user) {
      throw new Error('Email or password incorrect!');
    }
    console.log("teste,", )
    const passwordMatch = compare(password, user.password);
    console.log("teste,", password, user.password)
    if (!passwordMatch) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign({}, secretToken, {
      //subject é o id do usuário que vai gerar o token
      subject: user.id,
      expiresIn: expiresInToken,
    });

    

    // await this.usersTokensRepository.create({
    //   user_id: user.id,
    //   refresh_token: refresh_token,
    //   expires_date: refresh_token_expires_date,
      

    // });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
  
    };

    return tokenReturn;
  }
}

export { CreateSessionUseCase };
