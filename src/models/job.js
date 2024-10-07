const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Job = sequelize.define('Job', {
  nome: { type: DataTypes.STRING, allowNull: false },
  cargo: { type: DataTypes.STRING, allowNull: false },
  nivel: { type: DataTypes.STRING, allowNull: false },
  empresa: { type: DataTypes.STRING, allowNull: false },
  quantidade: { type: DataTypes.INTEGER, allowNull: false },
  salario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  localizacao: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false }
});

module.exports = Job;