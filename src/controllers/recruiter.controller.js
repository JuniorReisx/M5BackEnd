import { Recruiter } from '../models/recruiter.model.js';

const listRecruiters = async (req, res) => {
  const recruiters = await Recruiter.findAll();
  res.json(recruiters);
};

const createRecruiter = async (req, res) => {
  const newRecruiter = await Recruiter.create(req.body);
  res.json(newRecruiter);
};

const deleteRecruiter = async (req, res) => {
  await Recruiter.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};

export { listRecruiters, createRecruiter, deleteRecruiter };
