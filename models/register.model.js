import { pool } from "../database/conection.js"

const registerUser = async (name,lastname,email,age,code_teacher) => {
    const query = "INSERT INTO profesor (nombre, apellido, email, edad,codigo_profesor) VALUES ($1, $2, $3, $4, $5) RETURNING *"
    const {rows} = await pool.query(query, [name,lastname,email,age,code_teacher]);
    return rows[0];
};

export const registerModel = { 
    registerUser,
};