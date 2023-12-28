import MatchInterface from '../Interfaces/MatchInterface';
import MatchModel from '../models/Match.model';

export default class MatchService {
  constructor(private model = new MatchModel()) {
  }

  public async findAll(progress: string | undefined) {
    if (progress !== undefined) {
      const inProgress = progress === 'true';
      const matchesInProgress = await this.model.matchesInProgess(inProgress);
      return matchesInProgress;
    }

    const allMatches = await this.model.findAll();
    return allMatches;
  }

  public async finishMatch(id: number) {
    await this.model.finishMatch(id);
  }

  public async updateMatch(id: number, match: MatchInterface) {
    await this.model.updateMatch(id, match);
  }
}
