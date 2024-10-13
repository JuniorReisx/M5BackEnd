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

const updateRecruiter = async (req, res) => {
  const { id } = req.params;

  try {
    const { nome, empresa, contato } = req.body;

    const [updated] = await Recruiter.update(
      { nome, empresa, contato },
      { where: { id: id }, returning: true }
    );

    if (updated) {
      const updatedUser = await Recruiter.findOne({ where: { id: id } });
      return res.status(200).json(updatedUser);
    }

    return res.status(404).json({ error: 'User not found' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update user' });
  }
};


const deleteRecruiter = async (req, res) => {
  try {
    await Recruiter.destroy({ where: { id: req.params.id } });
    return res.status(204).json('sucess')
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar recrutador' });
  }
};

export { listRecruiters, createRecruiter, deleteRecruiter, updateRecruiter };
