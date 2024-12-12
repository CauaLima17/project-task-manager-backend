import express from 'express';
import TarefaController from '../controllers/TarefaController.js';

const TarefaRouters = express.Router();

TarefaRouters.get('/', TarefaController.getAll);
TarefaRouters.get('/:projeto_id', TarefaController.getAllByProjectID);
TarefaRouters.post('/', TarefaController.create);

export default TarefaRouters;