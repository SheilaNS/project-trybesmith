import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/prodInterface';

const prodModel = {
  add: async (prod: Product): Promise<ResultSetHeader> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [newProd] = await connection.execute<ResultSetHeader>(query, [prod.name, prod.amount]);
    return newProd;
  },
};

export default prodModel;