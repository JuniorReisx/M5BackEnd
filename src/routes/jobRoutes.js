const express = require('express');
const { listJobs, createJob, deleteJob } = require('../controllers/jobController');
const router = express.Router();

router.get('/jobs', listJobs);
router.post('/jobs', createJob);
router.delete('/jobs/:id', deleteJob);

module.exports = router;