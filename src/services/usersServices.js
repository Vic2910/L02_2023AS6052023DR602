import { pool } from '../db.js';

export const getAllUsers = async () => {
        const result = await pool.query('SELECT * FROM doc.usuarios');
        return result.rows;
};

export const getUserByName = async (req) => {
    const { nombre } = req.params;
        const result = await pool.query('SELECT * FROM doc.usuarios WHERE nombre = $1', [nombre]);
        return result.rows;
  
};

export const getUserByApellido = async (req) => {
    const { apellido } = req.params;

        const result = await pool.query('SELECT * FROM doc.usuarios WHERE apellido = $1', [apellido]);
        return result.rows;
 
};

export const getUserByRol = async (req) => {
    const { rol } = req.params;

        const result = await pool.query(
            `SELECT u.*, r.rol
                FROM doc.usuarios u
                JOIN doc.roles r ON u.rolId = r.rolId
                WHERE r.rol = $1`, [rol]);
        return result.rows;
  
};

export const postCreateUser = async (req) => {
    const { usuarioId, rolId, nombreUsuario, clave, nombre, apellido } = req.body;

        const result = await pool.query(
            `INSERT INTO doc.usuarios (usuarioId, rolId, nombreUsuario, clave, nombre, apellido)
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [usuarioId, rolId, nombreUsuario, clave, nombre, apellido]
        );
        return result.rows;
};

export const putUpdateUser = async (req) => {
    const { usuarioId } = req.params;
    const { rolId, nombreUsuario, clave, nombre, apellido } = req.body;

        const result = await pool.query(
            `UPDATE doc.usuarios
                SET rolId = $1, nombreUsuario = $2, clave = $3, nombre = $4, apellido = $5
                WHERE usuarioId = $6 RETURNING *`,
            [rolId, nombreUsuario, clave, nombre, apellido, usuarioId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return result.rows;

};

export const deleteUser = async (req) => {
    const { usuarioId } = req.params;

        const result = await pool.query('DELETE FROM doc.usuarios WHERE usuarioId = $1 RETURNING *', [usuarioId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return result.rows;
};