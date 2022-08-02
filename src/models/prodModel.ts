import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/prodInterface';

const prodModel = {
  add: async (prod: Product): Promise<ResultSetHeader> => {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [newProd] = await connection.execute<ResultSetHeader>(sql, [prod.name, prod.amount]);
    return newProd;
  },

  list: async (): Promise<Product[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products;';
    const result = await connection.execute(sql);
    const [products] = result; 
    return products as Product[];
  },
};

export default prodModel;