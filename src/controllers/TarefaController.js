import TarefaRepository from "../repositories/TarefaRepositorio.js";

const TarefaController = {
    async getAll(req, res){
        try {
            const tarefas = await TarefaRepository.findAll();
            res.json(tarefas);
        } catch (err) {
            res.status(500).json({err : 'Erro na busca de tarefas', err})
        }
    },
    
    async create(req, res){
        const {nome} = req.body;
        try {
            const novaTarefa = {nome};
            const tarefaCriada = await TarefaRepository.createTarefa(novaTarefa);
            res.status(201).json(tarefaCriada);
        } catch(err){
            res.status(500).json({err: "Erro na criação da tarefa", err});
        }
    },

    async getAllByProjectID(req, res){
        const {projeto_id} = req.params
        
        try {
            const tarefas = await TarefaRepository.findByProjectId(projeto_id);
            res.json(tarefas);
        } catch (err) {
            res.status(500).json({err: "Erro na busca de tarefas por id de projeto", err});
        }
    }
}

export default TarefaController;