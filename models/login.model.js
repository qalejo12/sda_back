import { pool } from "../database/conection.js"

const loginUser = async (contraseña, codigo) => {
    const query = "SELECT * FROM usuario WHERE contraseña = $1 AND codigo = $2";
    const { rows } = await pool.query(query, [contraseña, codigo]);
    return rows[0];
};

const authProfessor = async (idUsuario, codigo) => {
    const query = "SELECT * FROM profesor WHERE id_usuario = $1 AND codigo_profesor = $2";
    const { rows } = await pool.query(query, [idUsuario, codigo]);
    return rows.length > 0;
};

export const loginModel = { 
    loginUser,
    authProfessor,
};