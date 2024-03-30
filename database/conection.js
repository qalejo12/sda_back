import "dotenv/config";
import pkg from 'pg';    
const { Pool} = pkg; 

export const pool = new Pool({
    allowExitOnIdle: true, // Se hace una petición al backend y cierra la conexion
});

try {
    await pool.query("SELECT NOW()");
    console.log("Database conected");
} catch (error) {
    console.log(error);
}