import { NextFunction, Request, Response } from 'express';
import { generateToken, verifyToken } from '../utils/JWT';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const { userInfos } = req.body;

    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    const decoded = verifyToken(token)?.toString();
    console.log(JSON.parse(decoded));

    if (decoded !== userInfos.userName) {
      const newToken = generateToken({
        id: userInfos.id,
        userName: userInfos.userName,
      });

      return res.status(200).json({ token: newToken });
    }

    next();
  } catch (err) {
    next(err);
  }
};

export { validateToken };
