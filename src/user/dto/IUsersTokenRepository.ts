import { IUserTokenDTO } from "./IUserTokenDTO";


interface IUsersTokensRepository {
    create({
      expires_date,
      refresh_token,
      user_id,
    }: IUserTokenDTO): Promise<void>;

    deleteById(id: string): Promise<void>;
    findByUserIdAndRefreshToken(user_id: string,refresh_token: string): Promise<any>;

  }
  
  export { IUsersTokensRepository };