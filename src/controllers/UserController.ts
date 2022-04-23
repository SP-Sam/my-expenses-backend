import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prismaClient';
import { INewUser } from '../interfaces/UserInterfaces';
import { generateToken } from '../utils/JWT';

class UserController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, lastName, userName, password }: INewUser = req.body;

      const newUser = await prisma.user.create({
        data: {
          name,
          last_name: lastName,
          user_name: userName,
          password,
        },
      });

      const token = generateToken({
        id: newUser.id,
        userName: newUser.user_name,
      });

      return res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;

      return res.json(token);
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
