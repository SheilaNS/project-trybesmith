import Login from '../interfaces/loginInterface';
import loginModel from '../models/loginModel';
import tokenService from './tokenService';

const loginService = {
  login: async (data: Login): Promise<string> => {
    const user = await loginModel.getUser(data);
    const token = await tokenService.create(user);
    return token;
  },
};

export default loginService;