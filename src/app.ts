import express, { Request, Response } from 'express';
import UserRouter from './routers/UserRouter';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Bem-vindo(a) à API do myExpenses' });
});

app.use('/users', UserRouter);

export default app;
