import TarefaRepositorio from "../repositories/TarefaRepositorio.js";

const TarefaController = {
    async getAll(req, res){
        try {
            const tarefas = await TarefaRepositorio.findAll();
            res.json(tarefas);
        } catch (err) {
            res.status(500).json({err : 'Erro na busca de tarefas', err})
        }
    },
    
    async create(req, res){
        const {titulo, descricao, projeto_id} = req.body;
        try {
            const novaTarefa = {titulo, descricao, projeto_id};
            const tarefaCriada = await TarefaRepositorio.createTask(novaTarefa);
            res.status(201).json(tarefaCriada);
        } catch(err){
            res.status(500).json({err: "Erro na criação da tarefa", err});
        }
    },

    async getAllByProjectID(req, res){
        const {projeto_id} = req.params
        
        try {
            const tarefas = await TarefaRepositorio.findByProjectId(projeto_id);
            res.json(tarefas);
        } catch (err) {
            res.status(500).json({err: "Erro na busca de tarefas por id de projeto", err});
        }
    },

    async getAllByUserID(req, res){
        const {user_id} = req.params

        try {
            const tarefas = await TarefaRepositorio.findByUserId(user_id);
            res.status(200).json(tarefas)
        } catch (err) {
            res.status(500).json({err: "Erro na busca de tarefas por id de usuário"});
        }
    }
}

export default TarefaController;