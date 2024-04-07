import { pool } from "../database/conection.js"


const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM usuario");
    return rows;
};

const findUser = async(id) => {
    const query = "SELECT * FROM usuario WHERE id_usuario = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const remove = async (id) => {
    const query = "DELETE FROM usuario WHERE id_usuario = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const update = async (id, password, code, is_teacher) => {
    const query = "UPDATE usuario SET contraseña = $1, codigo = $2, es_profesor = $3 WHERE id_usuario = $4 RETURNING *";
    const { rows } = await pool.query(query, [password, code, is_teacher, id]);
    return rows[0];
};


export const userModel = {
    findAll,
    findUser,
    remove,
    update,
};