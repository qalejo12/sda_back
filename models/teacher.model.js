import { pool } from "../database/conection.js"

const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM profesor");
    return rows;
};

const findTeacher = async(id) => {
    const query = "SELECT * FROM profesor WHERE id_profesor = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const remove = async (id) => {
    const query = "DELETE FROM profesor WHERE id_profesor = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const update = async (id, name, lastname, email, age, code_teacher) => {
    const query = "UPDATE profesor SET nombre = $1, apellido = $2, email = $3, edad = $4, codigo_profesor = $5 WHERE id_profesor = $6 RETURNING *";
    const { rows } = await pool.query(query, [name, lastname, email, age, code_teacher, id]);
    return rows[0];
};


export const teacherModel = {
    findAll,
    remove,
    update,
    findTeacher
};