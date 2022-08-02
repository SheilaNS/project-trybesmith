import { Router } from 'express';
import prodController from '../controllers/prodController';

const prodRouter = Router();

prodRouter.post('/', prodController.add);
prodRouter.get('/', prodController.list);

export default prodRouter;