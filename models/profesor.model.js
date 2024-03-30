import { pool } from "../database/conection.js"

const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM profesor");
    return rows;
};

const create = async (nombre,apellido,email,edad,codigo_profesor) => {
    const query = "INSERT INTO profesor (nombre, apellido, email, edad,codigo_profesor) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const {rows} = await pool.query(query, [nombre,apellido,email,edad,codigo_profesor]);
    return rows[0];
};

export const profesorModel = {
    findAll,
    create,
};