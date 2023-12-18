import { Request, Response, Router } from 'express';
import LoginController from '../controller/Login.controller';
import LoginValidation from '../middlewares/Login.middleware';
import TokenValidation from '../middlewares/Token.middleware';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  LoginValidation.validateLogin,
  (req:Request, res:Response) => loginController.login(req, res),
);

router.get(
  '/role',
  TokenValidation.validate,
  (req:Request, res:Response) => LoginController.getRole(req, res),
);

export default router;
