import express from 'express';
import orderRouter from './routes/orderRouter';
import prodRouter from './routes/prodRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/orders', orderRouter);
app.use('/products', prodRouter);
app.use('/users', userRouter);

export default app;
