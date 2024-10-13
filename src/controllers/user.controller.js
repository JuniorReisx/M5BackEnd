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


const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { nome, formacao, endereco, pretensaoSalarial, contato, dataDeNascimento } = req.body;

    const [updated] = await User.update(
      { nome, formacao, endereco, pretensaoSalarial, contato, dataDeNascimento },
      { where: { id: id }, returning: true }
    );

    if (updated) {
      const updatedUser = await User.findOne({ where: { id: id } });
      return res.status(200).json(updatedUser);
    }

    return res.status(404).json({ error: 'User not found' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    return res.status(204).json('sucess')
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};

export { listUsers, createUser, deleteUser, updateUser };
