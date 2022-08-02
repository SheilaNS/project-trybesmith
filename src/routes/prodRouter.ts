import { Router } from 'express';
import prodController from '../controllers/prodController';

const prodRouter = Router();

prodRouter.post('/', prodController.add);

export default prodRouter;