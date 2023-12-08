import TeamInterface from '../Interfaces/TeamInterface';
import ITeamModel from '../Interfaces/ITeamModel';
import TeamsModel from '../database/models/Team.model';

export default class TeamModel implements ITeamModel {
  private model = TeamsModel;

  async findAll(): Promise<TeamInterface[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async findById(id: number): Promise<TeamInterface | null> {
    const team = await this.model.findByPk(id);
    return team;
  }
}
