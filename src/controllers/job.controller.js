import { Job } from '../models/job.model.js';

const listJobs = async (req, res) => {
  const jobs = await Job.findAll();
  res.json(jobs);
};

// exports.createJob = async (req, res) => {
//   const newJob = await Job.create(req.body);
//   res.json(newJob);
// };

// exports.deleteJob = async (req, res) => {
//   await Job.destroy({ where: { id: req.params.id } });
//   res.sendStatus(204);
// };

export { listJobs }