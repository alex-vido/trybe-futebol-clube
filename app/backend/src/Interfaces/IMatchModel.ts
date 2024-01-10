import IMatchCreate from './ICreateMatch';
import MatchInterface from './MatchInterface';

export default interface IMatchModel {
  findAll(): Promise<MatchInterface[]>;
  matchesInProgess(progress: boolean): Promise<MatchInterface[]>;
  finishMatch(id: number): Promise<void>;
  updateMatch(id: number, match: MatchInterface): Promise<void>;
  createMatch(match: IMatchCreate): Promise<MatchInterface>;
}
