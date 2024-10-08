import express from 'express';
import { listJobs } from '../controllers/job.controller.js';
// const { listJobs, createJob, deleteJob } = require('../controllers/jobController');
const jobRoutes = express.Router();

jobRoutes.get('/jobs', listJobs);
// router.post('/jobs', createJob);
// router.delete('/jobs/:id', deleteJob);

export { jobRoutes }