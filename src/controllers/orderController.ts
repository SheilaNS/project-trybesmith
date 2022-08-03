import { Request, Response } from 'express';
import orderService from '../services/orderService';

const orderController = {
  list: async (_req: Request, res: Response): Promise<Response> => {
    const result = await orderService.list();
    return res.status(200).json(result);
  },
};

export default orderController;