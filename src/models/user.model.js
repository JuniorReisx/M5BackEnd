import { database } from "../database/db.js";
import { DataTypes } from "sequelize";

const User = database.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  formacao: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  pretensaoSalarial: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  contato: { type: DataTypes.STRING(100), allowNull: false },
  dataDeNascimento: { type: DataTypes.DATE, allowNull: false }
});

export { User };
