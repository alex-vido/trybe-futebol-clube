import LeaderboardInterface from '../Interfaces/LeaderboardInterface';
import ILeaderboard from '../Interfaces/ILeaderboard';
import TeamModel from '../database/models/Team.model';
import MatchModel from '../database/models/Match.model';
import LeaderboardCreator from '../utils/LeaderboardCreator';
import SortMatches from '../utils/SortMatches';

export default class LeaderBoardModel implements ILeaderboard {
  private teamsModel = TeamModel;
  private matchesModel = MatchModel;

  private async getMatchesNotInProgress() {
    const teams = await this.teamsModel.findAll();
    const matches = await this.matchesModel.findAll({
      where: { inProgress: false },
    });
    return { teams, matches };
  }

  async homeLeaderboard(): Promise<LeaderboardInterface[]> {
    const { teams, matches } = await this.getMatchesNotInProgress();
    const homeboard = teams.map((team) => {
      const homeMatches = matches.filter((match) => match.homeTeamId === team.id);
      return {
        name: team.teamName,
        ...LeaderboardCreator.generate(homeMatches, team.id),
      };
    });

    return SortMatches.sort(homeboard);
  }

  async awayLeaderboard(): Promise<LeaderboardInterface[]> {
    const { teams, matches } = await this.getMatchesNotInProgress();
    const awaybord = teams.map((team) => {
      const awayMatches = matches.filter((match) => match.awayTeamId === team.id);
      return {
        name: team.teamName,
        ...LeaderboardCreator.generate(awayMatches, team.id),
      };
    });

    return SortMatches.sort(awaybord);
  }
}
