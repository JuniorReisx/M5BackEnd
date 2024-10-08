import { database } from "../database/db.js";
import { DataTypes } from "sequelize";

const Recruiter = database.define('Recruiter', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  empresa: { type: DataTypes.STRING, allowNull: false },
  contato: { type: DataTypes.STRING, allowNull: false }
});

export { Recruiter };
