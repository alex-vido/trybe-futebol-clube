import { Request, Response, Router } from 'express';
import LeaderboardController from '../controller/Leaderboard.controller';

const leaderboardController = new LeaderboardController();
const router = Router();

router.get('/home', (req:Request, res:Response) =>
  leaderboardController.homeLeaderboard(req, res));

router.get('/away', (req:Request, res:Response) =>
  leaderboardController.awayLeaderboard(req, res));

export default router;
