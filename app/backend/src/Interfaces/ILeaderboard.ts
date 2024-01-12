import LeaderboardInterface from './LeaderboardInterface';

export default interface ILeaderboard {
  homeLeaderboard(): Promise<LeaderboardInterface[]>;
  awayLeaderboard(): Promise<LeaderboardInterface[]>;
}
