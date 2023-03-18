import { verify } from 'jsonwebtoken';
import { NextFunction,Request, Response } from 'express';
// import { UsersRepository } from '../user/repositories/usersRepository';
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
    const {sub: user_id} = verify(token, auth.secretToken) as IPayload;

    request.user = {
      id: user_id,
    };
  
    next();
  } catch (error) {
    throw new AppError('invalid token', 401);
  }
}



