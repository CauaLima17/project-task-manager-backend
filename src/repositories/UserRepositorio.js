import User from "../models/User.js";
import DBInterface from "../config/dbInterface.js";

const UserRepositorio = {
    async findAll(){
        const rows = await DBInterface.query('SELECT * FROM users');
        return rows.map(row => new User(row.id, row.username, row.email, row.hash_password));
    },

    async create(user){
        const result = await DBInterface.query('INSERT INTO users (username, email, hash_password) VALUES (?,?,?)', [user.username, user.email, user.hash_password]);

        user.id = result.insertId
        return user
    },

    async findByEmail(user){
        const rows = await DBInterface.query('SELECT * FROM users WHERE email = (?)', [user.email]);
        return rows.map(row => new User(row.id, row.username, row.email, row.hash_password));
    }
}

export default UserRepositorio