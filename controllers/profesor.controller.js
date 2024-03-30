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

export const profesorController = {
    getAll,
    create,
};