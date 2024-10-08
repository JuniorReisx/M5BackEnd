import express from 'express';
import { jobRoutes } from './routes/job.routes.js';
// import userRoutes from './routes/userRoutes.js';
import { recruiterRoutes } from './routes/recruiter.routes.js';
// import corsMiddleware from './corsMiddleware.js';
import { tryConnectSequelize } from './database/db.js';

const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
// server.use(corsMiddleware);


server.use(jobRoutes);
// server.use(userRoutes);
 server.use(recruiterRoutes);


server.listen(port, () => {
  tryConnectSequelize();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
