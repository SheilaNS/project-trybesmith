import express from 'express';
import prodRouter from './routes/prodRouter';

const app = express();

app.use(express.json());

app.use('/products', prodRouter);

export default app;
