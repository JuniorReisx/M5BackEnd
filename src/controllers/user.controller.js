import { User } from '../models/user.model.js';

const listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};


const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

export { listUsers, createUser, deleteUser };
