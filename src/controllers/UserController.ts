import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prismaClient';
import { INewUser } from '../interfaces/UserInterfaces';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
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

      return res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await prisma.user.findMany();

      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
