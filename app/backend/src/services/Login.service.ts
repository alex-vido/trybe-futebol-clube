import UserModel from '../models/User.model';
import LoginInterface from '../Interfaces/LoginInterface';

export default class LoginService {
  constructor(private model = new UserModel()) {
  }

  public async login(login: LoginInterface) : Promise<string | null> {
    const token = await this.model.login(login);
    return token;
  }
}
