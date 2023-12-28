import MatchInterface from './MatchInterface';

export default interface IMatchModel {
  findAll(): Promise<MatchInterface[]>;
  matchesInProgess(progress: boolean): Promise<MatchInterface[]>;
}
