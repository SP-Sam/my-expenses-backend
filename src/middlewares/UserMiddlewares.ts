import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prismaClient';

const verifyNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName } = req.body;

    const user = await prisma.user.findUnique({
      where: { user_name: userName },
    });

    if (user) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    next();
  } catch (err) {
    next(err);
  }
};

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { user_name: userName },
    });

    if (!user) {
      return res.status(400).json({ message: 'Usuário não cadastrado' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Senha inválida' });
    }

    req.body.userInfos = {
      id: user.id,
      userName: user.user_name,
    };

    next();
  } catch (err) {
    next(err);
  }
};

export { verifyNewUser, verifyUser };
