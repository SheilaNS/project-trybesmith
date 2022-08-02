import { Request, Response } from 'express';
import prodService from '../services/prodService';

const prodController = {
  add: async (req: Request, res: Response): Promise<Response> => {
    const newProd = await prodService.add(req.body);
    return res.status(201).json(newProd);
  },
};

export default prodController;