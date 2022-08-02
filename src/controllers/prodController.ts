import { Request, Response } from 'express';
import prodService from '../services/prodService';

const prodController = {
  add: async (req: Request, res: Response): Promise<Response> => {
    const newProd = await prodService.add(req.body);
    return res.status(201).json(newProd);
  },

  list: async (req: Request, res: Response): Promise<Response> => {
    const result = await prodService.list();
    return res.status(200).json(result);
  },
};

export default prodController;