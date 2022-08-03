import Order from '../interfaces/orderInterface';
import orderModel from '../models/orderModel';

const orderService = {
  list: async (): Promise<Order[]> => {
    const result = await orderModel.list();
    return result as Order[];
  },
};

export default orderService;