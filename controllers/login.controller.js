import jwt from 'jsonwebtoken';
import { loginModel } from "../models/login.model.js";


const login = async (req, res) => {
    try {
        const { contraseña, codigo } = req.body;
        
        // Buscar el usuario en la base de datos por su código de profesor y contraseña
        const usuario = await loginModel.loginUser(contraseña, codigo);
        
        if (!usuario) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const isProfessor = await loginModel.authProfessor(usuario.id_usuario, codigo);

        if (!isProfessor) {
            return res.status(401).json({ message: "Usuario no registrado" });
        }

        const token = jwt.sign({ idUsuario: usuario.id_usuario }, 'your_secret_key', { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar iniciar sesión" });
    }
};

export default { login };