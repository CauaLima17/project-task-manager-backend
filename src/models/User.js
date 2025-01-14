class User {
    constructor(id, username, email, hash_password){
        this._id = id
        this._username = username
        this._email = email
        this._hash_password = hash_password
    }

    setID(id){
        this._id = id;
    }

    setUsername(username){
        this._username = username;
    }

    setEmail(email){
        this._email = email;
    }

    setHashPassword(hash_password){
        this._hash_password = hash_password;
    }

    getID(){
        return this._id;
    }

    getUsername(){
        return this._username;
    }

    getEmail(){
        return this._email;
    }

    getHashPassword(){
        return this._hash_password;
    }
}

export default User