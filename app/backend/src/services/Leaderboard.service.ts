import LeaderBoardModel from '../models/Leaderboard.model';
import LeaderboardInterface from '../Interfaces/LeaderboardInterface';

export default class LeaderboardService {
  constructor(private model = new LeaderBoardModel()) {
  }

  public async homeLeaderboard(): Promise<LeaderboardInterface[]> {
    const homeboard = await this.model.homeLeaderboard();
    return homeboard;
  }

  public async awayLeaderboard(): Promise<LeaderboardInterface[]> {
    const awayboard = await this.model.awayLeaderboard();
    return awayboard;
  }
}
