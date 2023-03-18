import auth from "../config/auth";
import { IUsersTokensRepository } from "../user/dto/IUsersTokenRepository";
import { sign, verify } from "jsonwebtoken";
import { UserToken } from "../user/entities/userToken";
import { AppError } from "errors/error";

interface IPayload {
    sub: string;
    email: string;
  }
  
  interface ITokenResponse {
    token: string;
    refresh_token: string;
  }


class RefreshTokenUseCase {
  constructor( private usersTokensRepository: IUsersTokensRepository){
    }

 async execute(token: string): Promise<ITokenResponse> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = sub;

    const userToken = await UserToken.findById(
      user_id,
      token
    );

    if (!userToken) {
      throw new AppError("Refresh Token does not exists!");
    }

    await UserToken.deleteOne(userToken._id);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });

    
    await this.usersTokensRepository.create({
    expires_date: new Date(),                                     
      refresh_token,
      user_id,
    });

    const newToken = sign({}, auth.secretToken, {
      subject: user_id,
      expiresIn: auth.expiresInToken,
    });

    return {
      refresh_token,
      token: newToken,
    };
  }
}

export { RefreshTokenUseCase };
