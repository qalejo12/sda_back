import { pool } from "../database/conection.js"

const loginUser = async (password, code) => {
    const query = "SELECT * FROM usuario WHERE contraseña = $1 AND codigo = $2";
    const { rows } = await pool.query(query, [password, code]);
    return rows[0];
};

const authProfessor = async (idUsuario, code) => {
    const query = "SELECT * FROM profesor WHERE id_usuario = $1 AND codigo_usuario = $2";
    const { rows } = await pool.query(query, [idUsuario, code]);
    return rows.length > 0;
};

export const loginModel = { 
    loginUser,
    authProfessor,
};