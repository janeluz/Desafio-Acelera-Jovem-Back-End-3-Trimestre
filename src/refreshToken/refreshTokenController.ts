import { AppError } from "errors/error";
import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./refreshTokenUseCase";

class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.body.token || request.headers["x-access-token"] || request.query.token;

    try {
      const refreshToken = await this.refreshTokenUseCase.execute(token);
      return response.json(refreshToken);
    } catch (error) {
      return response.status(400).json({
        message: AppError || "Unexpected error."
      });
    }
  }



}


export { RefreshTokenController };