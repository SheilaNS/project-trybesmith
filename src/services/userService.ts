import User from '../interfaces/userInterface';
import userModel from '../models/userModel';

const userService = {
  add: async (user: User): Promise<User> => {
    const { insertId } = await userModel.add(user);
    const newUser = {
      id: insertId,
      ...user,
    };
    return newUser;
  },
};

export default userService;