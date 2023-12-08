import TeamInterface from './TeamInterface';

export default interface ITeamModel {
  findAll(): Promise<TeamInterface[]>;
}
