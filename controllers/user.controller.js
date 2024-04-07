import { userModel } from "../models/user.model.js";


const getAll = async (_, res) => {
    try {
        const response = await userModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error)
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await userModel.findUser(id);
        if (!response) {
            return res.status(404).json({ message: "No se encontró el usuario" });
        }
        res.json({ message: "Usuario encontrado", foundUser: response });
    } catch(error) {
        console.log(error);
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const response = await userModel.remove(id);
        if (!response) {
            return res.status(404).json({ message: "No se encontró el usuario para eliminar" });
        }
        res.json({ message: "Usuario eliminado correctamente", deletedUser: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar eliminar el usuario" });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { password, code, is_teacher } = req.body;
        const updatedUsuario = await userModel.update(id, password, code, is_teacher);
        res.json({message: "Usuario modificado correctamente", updateUser: updatedUsuario});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar actualizar el usuario" });
    }
};

export const userController = {
    getAll,
    getUser,
    remove,
    update,
};