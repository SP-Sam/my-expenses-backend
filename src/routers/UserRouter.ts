import { Router } from 'express';
import UserController from '../controllers/UserController';
import { validateToken } from '../middlewares/TokenMiddleware';
import { verifyNewUser, verifyUser } from '../middlewares/UserMiddlewares';

const router = Router();

const userController = new UserController();

router.post('/signup', verifyNewUser, userController.signUp);
router.post('/login', verifyUser, validateToken, userController.login);

export default router;
