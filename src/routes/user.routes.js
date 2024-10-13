import express from 'express';
import { listUsers, createUser, deleteUser, updateUser} from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.get('/users', listUsers);
userRoutes.post('/users', createUser);
userRoutes.delete('/users/:id', deleteUser);
userRoutes.put('/users/:id', updateUser)

export { userRoutes };
