import { verify } from 'jsonwebtoken';
import { NextFunction,Request, Response } from 'express';
import { UsersRepository } from '../user/repositories/usersRepository';
import auth from '../config/auth';
import { AppError } from '../errors/error';
interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
 
  if (!authToken) {
    return response.status(401).json({
      message: 'Token missing',
      });
  }

  const [, token] = authToken.split(' ');
  
  try {
    const {sub: email} = verify(token, auth.secretToken) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByEmail(email);
   
    if (!user) {
      throw new Error('User does not exists');
    }
    console.log("teste,",user)
    return next();
  
  } catch (err) {
    throw new AppError('Invalid token');
  }
}
