import Projeto from '../models/Projeto.js';
import DBInterface from '../config/dbInterface.js';

const ProjetoRepository = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM projeto");
        return rows.map(row => new Projeto(row.id, row.nome,));
    },

    async createProject(projeto) {
        const result = await DBInterface.query('INSERT INTO projeto (nome) VALUES (?)', [projeto.nome]);

        projeto.id = result.insertId;
        return projeto
    }
}

export default ProjetoRepository;