import { registerModel } from "../models/register.model.js";

const register = async (req, res) => {
    try {
        const {name,lastname,email,age,code_teacher} = req.body;
        const response = await registerModel.registerUser(name,lastname,email,age,code_teacher);
        res.json({ message: "Usuario creado correctamente", createdUser: response });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export default {register};