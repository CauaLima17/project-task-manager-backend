class Tarefa {
    constructor(id, titulo, descricao, projeto_id, user_id){
        this._id = id 
        this._titulo = titulo 
        this._descricao = descricao 
        this._projeto_id = projeto_id
        this._user_id = user_id
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
}

export default Tarefa;