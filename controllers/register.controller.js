import { registerModel } from "../models/register.model.js";

const register = async (req, res) => {
    try {
        const {nombre,apellido,email,edad,codigo_profesor} = req.body;
        const response = await registerModel.registerUser(nombre,apellido,email,edad,codigo_profesor);
        res.json({ message: "Usuario creado correctamente", createdUser: response });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export default {register};