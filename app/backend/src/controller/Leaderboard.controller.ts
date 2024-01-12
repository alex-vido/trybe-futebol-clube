import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) {
  }

  public async homeLeaderboard(_req: Request, res: Response) {
    const homeboard = await this.service.homeLeaderboard();
    return res.status(200).json(homeboard);
  }

  public async awayLeaderboard(_req: Request, res: Response) {
    const awayboard = await this.service.awayLeaderboard();
    return res.status(200).json(awayboard);
  }
}
