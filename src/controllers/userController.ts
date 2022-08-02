import { Request, Response } from 'express';
import User from '../interfaces/userInterface';
import tokenService from '../services/tokenService';
import userService from '../services/userService';

const userController = {
  add: async (req: Request, res: Response): Promise<Response> => {
    const user = req.body as User;
    const result = await userService.add(user);
    const token = await tokenService.create(result);
    return res.status(201).json({ token });
  },
};

export default userController;