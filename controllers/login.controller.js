import jwt from 'jsonwebtoken';
import { loginModel } from "../models/login.model.js";


const login = async (req, res) => {
    try {
        const { password, code } = req.body;
        
        
        const user = await loginModel.loginUser(password, code);
        
        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const isTeacher = await loginModel.authProfessor(user.id_usuario, codigo);

        if (!isTeacher) {
            return res.status(401).json({ message: "Usuario no registrado" });
        }

        const token = jwt.sign({ idUsuario: user.id_usuario }, 'your_secret_key', { expiresIn: '1h' });
        
        res.json({ token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar iniciar sesión" });
    }
};

export default { login };