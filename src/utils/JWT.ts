import jwt, { SignOptions } from 'jsonwebtoken';
import { IJWTPayload } from '../interfaces/UserInterfaces';

const SECRET = process.env.JWT_SECRET || '';

const generateToken = (jwtPayload: IJWTPayload): string => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { ...jwtPayload } }, SECRET, jwtConfig);

  return token;
};

const verifyToken = (token: string) => {
  return jwt.decode(token);
};

export { generateToken, verifyToken };
