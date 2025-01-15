import AuthController from "../controllers/AuthController.js";
import express from 'express';

const AuthRouters = express.Router();

AuthRouters.post('/login', AuthController.login);

export default AuthRouters;