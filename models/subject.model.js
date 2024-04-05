import { pool } from "../database/conection.js"


const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM asignatura");
    return rows;
};

const remove = async (id) => {
    const query = "DELETE FROM asignatura WHERE id_asignatura = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const create = async (name) => {
    const query = "INSERT INTO asignatura (nombre) VALUES ($1) RETURNING *"
    const {rows} = await pool.query(query, [name]);
    return rows[0];
};

const update = async (id, name) => {
    const query = "UPDATE asignatura SET nombre = $1 WHERE id_asignatura = $2 RETURNING *";
    const { rows } = await pool.query(query, [name, id]);
    return rows[0];
};


export const subjectModel = {
    findAll,
    remove,
    create,
    update,
};