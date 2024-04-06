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

const create = async (name, qr) => {
    const query = "INSERT INTO asignatura (nombre, qr) VALUES ($1, $2) RETURNING *"
    const {rows} = await pool.query(query, [name, qr]);
    return rows[0];
};

const update = async (id, name, qr) => {
    const query = "UPDATE asignatura SET nombre = $1, qr = $2 WHERE id_asignatura = $3 RETURNING *";
    const { rows } = await pool.query(query, [name, qr, id]);
    return rows[0];
};


export const subjectModel = {
    findAll,
    remove,
    create,
    update,
};