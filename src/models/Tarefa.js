class Tarefa {
    constructor(id, titulo, descricao, projeto_id, user_id, status = null, prioridade = null){
        this._id = id 
        this._titulo = titulo 
        this._descricao = descricao 
        this._projeto_id = projeto_id
        this._user_id = user_id
        this._status = status
        this._prioridade = prioridade
    }

    setID(id) {
        this._id = id;
    }
    
    setTitulo(titulo) {
        this._titulo = titulo;
    }
    
    setDescricao(descricao){
        this._descricao = descricao;
    }

    setProjeto_id(projeto_id) {
        this._projeto_id = projeto_id;
    }

    setUser_id(user_id) {
        this._user_id = user_id;
    }

    setStatus(status) {
        this._status = status;
    }

    setPrioridade(prioridade) {
        this._prioridade = prioridade;
    }

    getID(){
        return this._id;
    }

    getTitulo(){
        return this._titulo;
    }

    getDescricao(){
        return this._descricao;
    }

    getProjeto_id(){
        return this._projeto_id;
    }

    getUser_id(){
        return this._user_id;
    }

    getStatus() {
        return this._status;
    }

    getPrioridade() {
        return this._prioridade;
    }
}

export default Tarefa;