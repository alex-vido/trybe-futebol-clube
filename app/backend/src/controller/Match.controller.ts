import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

export default class TeamController {
  constructor(private service = new MatchService()) {
  }

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const progress = typeof inProgress === 'string' ? inProgress : undefined;
    const matches = await this.service.findAll(progress);
    return res.status(200).json(matches);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.finishMatch(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }
}
