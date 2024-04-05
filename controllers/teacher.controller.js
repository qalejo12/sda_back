import { teacherModel } from "../models/teacher.model.js";

const getAll = async (_, res) => {
    try {
        const response = await teacherModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error)
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const response = await teacherModel.remove(id);
        if (!response) {
            return res.status(404).json({ message: "No se encontró el profesor para eliminar" });
        }
        res.json({ message: "Profesor eliminado correctamente", deletedProfesor: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar eliminar el profesor" });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastname, email, age, code_teacher } = req.body;
        const updatedProfesor = await teacherModel.update(id, name, lastname, email, age, code_teacher);
        res.json(updatedProfesor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar actualizar el profesor" });
    }
};

export const teacherController = {
    getAll,
    remove,
    update,
};