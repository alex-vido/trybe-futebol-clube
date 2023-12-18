import LoginInterface from './LoginInterface';

export default interface IUserModel {
  login(login: LoginInterface): Promise<string | null>;
}
