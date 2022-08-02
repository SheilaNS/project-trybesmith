import Product from '../interfaces/prodInterface';
import prodModel from '../models/prodModel';

const prodService = {
  add: async (prod: Product): Promise<Product> => {
    const { insertId } = await prodModel.add(prod);
    const newProd = {
      id: insertId,
      name: prod.name,
      amount: prod.amount,
    };
    return newProd;
  },
};

export default prodService;