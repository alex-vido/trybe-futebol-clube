import LeaderboardInterface from '../Interfaces/LeaderboardInterface';

export default class SortMatches {
  static sort(leaderBoard: LeaderboardInterface[]): LeaderboardInterface[] {
    leaderBoard.sort(
      (teamA, teamB) =>
        teamB.totalPoints - teamA.totalPoints
        || teamB.totalVictories - teamA.totalVictories
        || teamB.goalsBalance - teamA.goalsBalance
        || teamB.goalsFavor - teamA.goalsFavor
        || teamA.goalsOwn - teamB.goalsOwn,
    );
    return leaderBoard;
  }
}
