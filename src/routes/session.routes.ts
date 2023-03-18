import { Router } from "express";
import { createSessionController } from "../session";


const sessionRoutes = Router();

sessionRoutes.post('/', (request, response) => {
  return createSessionController.handle(request, response);
});

export { sessionRoutes };