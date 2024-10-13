import express from 'express';
import { listJobs, createJob, deleteJob, updateJob } from '../controllers/job.controller.js';

const jobRoutes = express.Router();

jobRoutes.get('/jobs', listJobs);
jobRoutes.post('/jobs', createJob);
jobRoutes.delete('/jobs/:id', deleteJob);
jobRoutes.put('/jobs/:id', updateJob)

export { jobRoutes };