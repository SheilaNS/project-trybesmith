import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import User from '../interfaces/userInterface';

dotenv.config();

const secret: Secret = `${process.env.JWT_SECRET}`;

const tokenService = {
  create: async (user: User): Promise<string> => {
    const { username, classe, level } = user;
    const payload = { data: { username, classe, level } };
    const token = jwt.sign(payload, secret);
    return token;
  },
};

export default tokenService;