import TeamDatabaseModel from '../database/models/Team.model';
import MatchDatabaseModel from '../database/models/Match.model';
import TeamModel from './Team.model';
import IMatchModel from '../Interfaces/IMatchModel';
import MatchInterface from '../Interfaces/MatchInterface';

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
}
