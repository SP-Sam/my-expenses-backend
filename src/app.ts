import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Bem-vindo(a) à API do myExpenses' });
});

export default app;
