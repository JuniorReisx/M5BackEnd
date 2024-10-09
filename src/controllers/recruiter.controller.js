import { Recruiter } from '../models/recruiter.model.js';

const listRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.findAll();
    res.json(recruiters);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar recrutadores' });
  }
};

const createRecruiter = async (req, res) => {
  try {
    const newRecruiter = await Recruiter.create(req.body);
    res.status(201).json(newRecruiter);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar recrutador' });
  }
};

const deleteRecruiter = async (req, res) => {
  try {
    await Recruiter.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar recrutador' });
  }
};

export { listRecruiters, createRecruiter, deleteRecruiter };
