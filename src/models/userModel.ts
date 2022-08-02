import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/userInterface';

const userModel = {
  add: async (user: User): Promise<ResultSetHeader> => {
    const { username, classe, level, password } = user;
    const sql = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);`;
    const [newUser] = await connection.execute<ResultSetHeader>(
      sql,
      [username, classe, level, password],
    );
    return newUser;
  },
};

export default userModel;