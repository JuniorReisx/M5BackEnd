import { database } from "../database/db.js";
import { DataTypes } from "sequelize";

const Job = database.define('Job', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cargo: { type: DataTypes.STRING, allowNull: false },
  nivel: { type: DataTypes.STRING, allowNull: false },
  empresa: { type: DataTypes.STRING, allowNull: false },
  quantidade: { type: DataTypes.INTEGER, allowNull: false },
  salario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  localizacao: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false }
});

export { Job }