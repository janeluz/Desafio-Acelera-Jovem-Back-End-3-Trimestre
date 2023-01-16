import { connection } from "mongoose";
import { IUsersTokensRepository } from "user/dto/IUsersTokenRepository";
import { IUserTokenDTO } from "user/dto/IUserTokenDTO";
import { UserToken } from "user/entities/userToken";

class UsersTokensRepository implements IUsersTokensRepository {
   constructor(){
    connection;
   }
    
    async create({
    expires_date,
    refresh_token,
    user_id,
  }: IUserTokenDTO): Promise<any> {
    const userToken = await UserToken.create({
      expires_date,
      refresh_token,
      user_id,
    });
    
    return userToken;
    }
    async deleteById(id: string): Promise<void> {
       await  UserToken.findById(id);
           
    }
    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<any> {
        const userToken = await UserToken.findOne({user_id, refresh_token});
        return userToken;

    
  }
}
export { UsersTokensRepository };