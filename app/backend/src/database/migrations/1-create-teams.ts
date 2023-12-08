import { DataTypes, Model, QueryInterface } from 'sequelize';
import TeamInterface from '../../Interfaces/TeamInterface';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TeamInterface>> ('teams',{
      id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      teamName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'team_name',
      },
    });
  },

  down(queryInterface: QueryInterface): void {
    queryInterface.dropTable("teams");
  }
}