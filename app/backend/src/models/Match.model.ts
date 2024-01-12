import TeamDatabaseModel from '../database/models/Team.model';
import MatchDatabaseModel from '../database/models/Match.model';
import TeamModel from './Team.model';
import IMatchModel from '../Interfaces/IMatchModel';
import MatchInterface from '../Interfaces/MatchInterface';
import IMatchCreate from '../Interfaces/ICreateMatch';
import NotFoundError from '../utils/NotFoundError';

export default class MatchModel implements IMatchModel {
  private matchModel = MatchDatabaseModel;
  private teamModel = new TeamModel();

  models = [
    { model: TeamDatabaseModel, as: 'homeTeam', attributes: ['teamName'] },
    { model: TeamDatabaseModel, as: 'awayTeam', attributes: ['teamName'] },
  ];

  findAll(): Promise<MatchInterface[]> {
    return this.matchModel.findAll({
      include: this.models,
    });
  }

  matchesInProgess(progress: boolean): Promise<MatchInterface[]> {
    return this.matchModel.findAll({
      where: { inProgress: progress },
      include: this.models,
    });
  }

  async finishMatch(id: number): Promise<void> {
    await this.matchModel.update({ inProgress: false }, { where: { id } });
  }

  async updateMatch(id: number, match: MatchInterface): Promise<void> {
    await this.matchModel.update(match, { where: { id } });
  }

  async isTeamExists(homeTeamId: number, awayTeamId: number): Promise<boolean> {
    const homeTeamData = await this.teamModel.findById(homeTeamId);
    const awayTeamData = await this.teamModel.findById(awayTeamId);

    if (!homeTeamData || !awayTeamData) {
      throw new NotFoundError('There is no team with such id!');
    }

    return true;
  }

  async createMatch(match: IMatchCreate): Promise<MatchInterface> {
    const { homeTeamId, awayTeamId } = match;
    await this.isTeamExists(homeTeamId, awayTeamId);
    const newMatch = await this.matchModel.create({ ...match, inProgress: true });
    return newMatch;
  }
}
