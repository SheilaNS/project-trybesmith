import Product from '../interfaces/prodInterface';
import prodModel from '../models/prodModel';

const prodService = {
  add: async (prod: Product): Promise<Product> => {
    const { insertId } = await prodModel.add(prod);
    const newProd = {
      id: insertId,
      ...prod,
    };
    return newProd;
  },

  list: async (): Promise<Product[]> => {
    const result = await prodModel.list();
    return result as Product[];
  },
};

export default prodService;