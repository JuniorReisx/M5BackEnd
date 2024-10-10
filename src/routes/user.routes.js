import express from 'express';
import { listUsers, createUser, deleteUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.get('/users', listUsers);
userRoutes.post('/users', createUser);
userRoutes.delete('/users/:id', deleteUser);

export { userRoutes };
