import { Router } from "express";
import { sessionController } from "../session";


const sessionRoutes = Router();

sessionRoutes.post('/', (request, response) => {
  return sessionController.handle(request, response);
});

export { sessionRoutes };