import { UserToken } from "user/entities/userToken";
import dayjs from 'dayjs';



class GenerateRefreshToken {

    async execute(user_id: string) {

    const expires_in_refresh_token = dayjs().add(10, 'day').unix(); 
    const generateRefreshToken = await  UserToken.create({
        user_id,
        expires_in_refresh_token
    })
    return generateRefreshToken;
    }
}

export { GenerateRefreshToken }