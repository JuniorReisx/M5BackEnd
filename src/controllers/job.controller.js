import { Job } from '../models/job.model.js';

const listJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar vagas' });
  }
};

const createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar vaga' });
  }
};

const deleteJob = async (req, res) => {
  try {
    await Job.destroy({ where: { id: req.params.id } });
    return res.status(204).json('sucess')
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar vaga' });
  }
};

export { listJobs, createJob, deleteJob };
