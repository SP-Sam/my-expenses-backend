import { NextFunction, Request, Response } from 'express';

const ErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  return res.status(500).json({ message: 'Algo deu errado' });
};

export default ErrorMiddleware;
