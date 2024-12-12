import Tarefa from '../models/Tarefa.js';
import DBInterface from '../config/dbInterface.js';

const TarefaRepository = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM tarefa");
        return rows.map(row => new Tarefa(row.id, row.titulo, row.descricao, row.projeto_id));
    },

    async createTask(tarefa) {
        const result = await DBInterface.query('INSERT INTO tarefa (titulo, descricao, projeto_id) VALUES (?, ?, ?)', [tarefa.titulo, tarefa.descricao, tarefa.projeto_id]);
        tarefa.id = result.insertId;
        return tarefa
    },

    async findByProjectId(projeto_id) {
        const rows = await DBInterface.query("SELECT * FROM tarefa WHERE projeto_id = ?", [projeto_id]);
        return rows.map(row => new Tarefa(row.id, row.titulo, row.descricao, row.projeto_id));
    }
}

export default TarefaRepository;

