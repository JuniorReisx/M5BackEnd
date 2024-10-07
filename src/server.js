const express = require('express');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const corsMiddleware = require('./corsMiddleware');
const sequelize = require('./models/index');

const app = express();
app.use(express.json());
app.use(corsMiddleware);


app.use(jobRoutes);
app.use(userRoutes);
app.use(recruiterRoutes);

sequelize.sync()
  .then(() => console.log('Banco sincronizado'))
  .catch(err => console.error('Erro ao sincronizar o banco:', err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});