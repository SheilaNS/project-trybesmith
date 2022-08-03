import connection from './connection';
import Order from '../interfaces/orderInterface';

const orderModel = {
  // JSON_ARRAYAGG: https://database.guide/json_arrayagg-function-in-oracle/
  list: async (): Promise<Order[]> => {
    const sql = `SELECT OD.id, OD.userId, JSON_ARRAYAGG(PR.id) AS productsIds
      FROM Trybesmith.Orders AS OD
      INNER JOIN Trybesmith.Products AS PR ON OD.id = PR.orderId
      GROUP BY OD.id
      ORDER BY OD.userId ASC;`;
    const [result] = await connection.execute(sql);
    return result as Order[];
  },
};

export default orderModel;