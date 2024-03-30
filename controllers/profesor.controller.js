import { profesorModel } from "../models/profesor.model.js";

const getAll = async (_, res) => {
    try {
        const response = await profesorModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error)
    }
};


const create = async (req, res) => {
    try {
        const {nombre,apellido,email,edad,codigo_profesor} = req.body;
        const response = await profesorModel.create(nombre,apellido,email,edad,codigo_profesor);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const response = await profesorModel.remove(id);
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
        const { nombre, apellido, email, edad, codigo_profesor } = req.body;
        const updatedProfesor = await profesorModel.update(id, nombre, apellido, email, edad, codigo_profesor);
        res.json(updatedProfesor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar actualizar el profesor" });
    }
};

export const profesorController = {
    getAll,
    create,
    remove,
    update,
};