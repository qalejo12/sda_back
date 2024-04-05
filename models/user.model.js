import { pool } from "../database/conection.js"


const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM usuario");
    return rows;
};

const remove = async (id) => {
    const query = "DELETE FROM usuario WHERE id_usuario = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const update = async (id, contraseña, codigo, es_profesor) => {
    const query = "UPDATE usuario SET contraseña = $1, codigo = $2, es_profesor = $3 WHERE id_usuario = $4 RETURNING *";
    const { rows } = await pool.query(query, [contraseña, codigo, es_profesor, id]);
    return rows[0];
};


export const userModel = {
    findAll,
    remove,
    update,
};