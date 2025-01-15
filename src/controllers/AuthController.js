import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserRepositorio from '../repositories/UserRepositorio.js';

const AuthController = {
  async login(req, res){
    const {email, password} = req.body
    try {
        const novoUser = {email, password}
        const users = await UserRepositorio.findByEmail(novoUser);

        if (users.length === 0) {
            return res.status(404).json({error: 'Usuário não encontrado.'})
        }

        const user = users[0]
        const isPasswordValid = await bcrypt.compare(password, user.getHashPassword())
        if (isPasswordValid === false) {
            return res.status(500).json({error: 'Senha incorreta.'})
        }

        const token = jwt.sign({user_id: user.getID(), username: user.getUsername(), user_email: user.getEmail()}, process.env.SECRET_KEY, {expiresIn: '1h'});
        return res.status(200).json({message: 'Logado com sucesso', token});

    } catch (err) {
        res.status(500).json({error: 'Erro ao logar usuário.'})
    }
  }
}

export default AuthController;