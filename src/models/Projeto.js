class Projeto {
    constructor(id, user_id, nome) {
        this._id = id;
        this._user_id = user_id
        this._nome = nome;
    }

    setID(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    setUserID(user_id){
        this._user_id = user_id;
    }

    getID(){
        return this._id;
    }

    getUserID(){
        return this._user_id;
    }

    getNome(){
        return this._nome;
    }
}

export default Projeto;