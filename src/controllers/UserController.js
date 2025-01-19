import UserRepositorio from "../repositories/UserRepositorio.js";
import bcrypt from 'bcryptjs';

const UserController = {
    async getAll(req, res){
        try {
            const users = await UserRepositorio.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({error: 'Erro na busca por usuários.'});
        }
    },

    async register(req, res){
        const {username, email, password} = req.body
        try {
            const novoUser = {username, email, password}
            const users = await UserRepositorio.findByEmail(novoUser);

            if (users.length > 0) {
                return res.status(409).json({error: 'Este usuário já existe.'})
            }

            const hash_password = await bcrypt.hash(password, 8)
            novoUser.password = hash_password

            await UserRepositorio.create(novoUser);
            return res.status(200).json({message: 'Usuário cadastrado com sucesso.'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao registrar usuário.'})
        }
    }
}

export default UserController;