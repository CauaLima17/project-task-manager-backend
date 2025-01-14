import ProjetoRepository from "../repositories/ProjetoRepositorio.js";

const ProjetoController = {
    async getAll(req, res){
        try {
            const projetos = await ProjetoRepository.findAll();
            res.json(projetos);
        } catch(err) {
            res.status(500).json({error : "Erro na busca de projetos", err});
        }
    },

    async create(req, res){
        const {nome} = req.body;
        try {
            const novoProjeto = {nome};
            const projetoCriado = await ProjetoRepository.createProject(novoProjeto);
            res.status(201).json(projetoCriado);
        } catch(err){
            res.status(500).json({error: "Erro na criação de projetos", err});
        }
    },

    async getByUserID(req, res){
        const {user_id} = req.params;
        try {
            const projetos = await ProjetoRepository.findByUserID(user_id)
            res.status(200).json(projetos);
        } catch (err) {
            res.status(500).json({error: "Erro na busca de projetos por USER ID"});
        }
    }
};

export default ProjetoController;