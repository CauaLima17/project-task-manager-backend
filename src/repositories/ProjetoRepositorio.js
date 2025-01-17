import Projeto from '../models/Projeto.js';
import DBInterface from '../config/dbInterface.js';

const ProjetoRepositorio = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM projeto");
        return rows.map(row => new Projeto(row.id, row.user_id, row.nome));
    },

    async createProject(projeto) {
        const result = await DBInterface.query('INSERT INTO projeto (nome, user_id) VALUES (?,?)', [projeto.nome, projeto.user_id]);

        projeto.id = result.insertId;
        return projeto
    },

    async findByUserID(user_id) {
        const rows = await DBInterface.query('SELECT * FROM projeto WHERE user_id = (?)', [user_id])
        return rows.map(row => new Projeto(row.id, row.user_id, row.nome));
    }
}

export default ProjetoRepositorio;