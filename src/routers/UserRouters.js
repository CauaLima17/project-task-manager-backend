import UserController from "../controllers/UserController.js";
import express from 'express';

const UserRouters = express.Router()

UserRouters.get('/', UserController.getAll)
UserRouters.post('/', UserController.register)

export default UserRouters;