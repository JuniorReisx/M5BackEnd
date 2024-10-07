const { Sequelize } = require('sequelize');

// Revisar depois!
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco PostgreSQL bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar no banco:', err));

module.exports = sequelize;