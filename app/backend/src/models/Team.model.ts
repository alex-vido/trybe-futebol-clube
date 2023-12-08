import TeamInterface from '../Interfaces/TeamInterface';
import ITeamModel from '../Interfaces/ITeamModel';
import TeamsModel from '../database/models/teams.model';

export default class TeamModel implements ITeamModel {
  private model = TeamsModel;

  async findAll(): Promise<TeamInterface[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}
