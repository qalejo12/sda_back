import { subjectModel } from "../models/subject.model.js";

const getAll = async (_, res) => {
    try {
        const response = await subjectModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error)
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const response = await subjectModel.remove(id);
        if (!response) {
            return res.status(404).json({ message: "No se encontró la asignatura para eliminar" });
        }
        res.json({ message: "Asignatura eliminado correctamente", deletedProfesor: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar eliminar la asignatura" });
    }
};

const create = async (req, res) => {
    try {
        const {nombre} = req.body;
        const response = await subjectModel.create(nombre);
        res.json({ message: "Asignatura creada correctamente", createdSubject: response });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre} = req.body;
        const updatedSubject = await subjectModel.update(id, nombre);
        res.json({message: "Asignatura modificada correctamente", updateSubject: updatedSubject});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al intentar actualizar la asignatura" });
    }
};

export const subjectController = {
    getAll,
    remove,
    create,
    update,
};