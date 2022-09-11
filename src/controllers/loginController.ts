import { Request, Response } from 'express';
import loginService from '../services/loginService';
import Login from '../interfaces/loginInterface';
// import User from '../interfaces/userInterface';

const loginController = {
  login: async (req: Request, res: Response) => {
    const loginInfo: Login = req.body;
    const token = await loginService.login(loginInfo);
    return res.status(200).json({ token });
  },
};

export default loginController;