import TeamModel from '../models/Team.model';

export default class TeamService {
  constructor(private model = new TeamModel()) {
  }

  public async findAll() {
    const teams = await this.model.findAll();
    return teams;
  }
}
