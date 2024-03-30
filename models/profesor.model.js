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

const remove = async (id) => {
    const query = "DELETE FROM profesor WHERE id_profesor = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const update = async (id, nombre, apellido, email, edad, codigo_profesor) => {
    const query = "UPDATE profesor SET nombre = $1, apellido = $2, email = $3, edad = $4, codigo_profesor = $5 WHERE id_profesor = $6 RETURNING *";
    const { rows } = await pool.query(query, [nombre, apellido, email, edad, codigo_profesor, id]);
    return rows[0];
};


export const profesorModel = {
    findAll,
    create,
    remove,
    update,
};