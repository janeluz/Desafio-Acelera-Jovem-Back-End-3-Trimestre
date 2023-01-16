import { createTasksController } from "../tasks/useCases/createTasks";
import { Router } from "express";
import { listTitleAndDoneController } from "../tasks/useCases/listTitleAndDone";
import { listByIdController } from "../tasks/useCases/listById";
import { updateTaskController } from "../tasks/useCases/updateTasks";
import { deleteTaskController } from "../tasks/useCases/deleteTasks";
import { ensureAuthenticated } from "../middlewares/ensuredAuthenticated";




const tasksRoutes = Router();

tasksRoutes.post('/',ensureAuthenticated,(request, response) => {
    return createTasksController.handle(request, response);
});
tasksRoutes.get('/:title/:done', (request, response) => {
    return listTitleAndDoneController.handle(request, response);
});

tasksRoutes.get('/:id',ensureAuthenticated, (request, response) => {
    return listByIdController.handle(request, response);
});

tasksRoutes.put('/:id',ensureAuthenticated, (request, response) => {
    return updateTaskController.handle(request, response);
});

tasksRoutes.delete('/:id', ensureAuthenticated,(request, response) => {
    return deleteTaskController.handle(request, response);
});


export { tasksRoutes };
