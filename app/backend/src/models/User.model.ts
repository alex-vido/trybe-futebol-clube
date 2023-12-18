import * as bcrypt from 'bcryptjs';
import IUserModel from '../Interfaces/IUserModel';
import LoginInterface from '../Interfaces/LoginInterface';
import UsersModel from '../database/models/User.model';
import TokenGenerator from '../utils/TokenGenerator';

export default class UserModel implements IUserModel {
  private model = UsersModel;
  async login(login: LoginInterface): Promise<string | null> {
    const user = await this.model.findOne({ where: { email: login.email } });
    if (user && bcrypt.compareSync(login.password, user.password)) {
      return TokenGenerator.generateToken({ id: user.id, email: user.email, role: user.role });
    }
    return null;
  }
}
