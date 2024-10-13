import express from 'express';
import { listRecruiters, createRecruiter, deleteRecruiter, updateRecruiter } from '../controllers/recruiter.controller.js';

const recruiterRoutes = express.Router();

recruiterRoutes.get('/recruiters', listRecruiters);
recruiterRoutes.post('/recruiters', createRecruiter);
recruiterRoutes.delete('/recruiters/:id', deleteRecruiter);
recruiterRoutes.put('/recruiters/:id', updateRecruiter)

export { recruiterRoutes };