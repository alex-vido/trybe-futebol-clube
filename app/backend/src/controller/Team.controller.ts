import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private service = new TeamService()) {
  }

  public async findAll(_req: Request, res: Response) {
    const teams = await this.service.findAll();
    return res.status(200).json(teams);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.service.findById(Number(id));
    if (!team) return res.status(404).json({ message: 'Team not found' });
    return res.status(200).json(team);
  }
}
