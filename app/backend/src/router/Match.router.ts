import { Request, Response, Router } from 'express';
import MatchController from '../controller/Match.controller';
import TokenValidation from '../middlewares/Token.middleware';
import MatchMiddleware from '../middlewares/Match.middleware';

const matchController = new MatchController();

const router = Router();

router.get('/', (req:Request, res:Response) => matchController.findAll(req, res));

router.patch(
  '/:id/finish',
  TokenValidation.validate,
  (req:Request, res:Response) => matchController.finishMatch(req, res),
);

router.patch(
  '/:id',
  TokenValidation.validate,
  (req:Request, res:Response) => matchController.updateMatch(req, res),
);

router.post(
  '/',
  TokenValidation.validate,
  MatchMiddleware.validate,
  (req:Request, res:Response) => matchController.createMatch(req, res),
);

export default router;
