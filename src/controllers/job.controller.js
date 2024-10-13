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

const updateJob = async (req, res) => {
  const { id } = req.params;

  try {
    const { nome, cargo, nivel, empresa, quantidade, salario, localizacao, descricao } = req.body;

    const [updated] = await Job.update(
      { nome, cargo, nivel, empresa, quantidade, salario, localizacao, descricao },
      { where: { id: id }, returning: true }
    );

    if (updated) {
      const updatedJob = await Job.findOne({ where: { id: id } });
      return res.status(200).json(updatedJob);
    }

    return res.status(404).json({ error: 'Job not found' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update job' });
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

export { listJobs, createJob, deleteJob, updateJob };
