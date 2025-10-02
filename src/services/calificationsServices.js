import { pool } from '../db.js';

export const getAllCalifications = async (req, res) => {

        const result = await pool.query('SELECT * FROM doc.calificaciones');
        return result.rows;
};

export const postCreateCalification = async (req, res) => {
    const { calificacionId, publicacionId, usuarioId, calificacion } = req.body;

        const result = await pool.query(
            `INSERT INTO doc.calificaciones (calificacionId, publicacionId, usuarioId, calificacion)
                VALUES ($1, $2, $3, $4) RETURNING *`,
            [calificacionId, publicacionId, usuarioId, calificacion]
        );
    return result.rows;
};

export const putUpdateCalification = async (req, res) => {
    const { id } = req.params;
    const { calificacion } = req.body;
    
        const result = await pool.query(
            `UPDATE doc.calificaciones
                SET calificacion = $1
                WHERE calificacionId = $2 RETURNING *`,
            [calificacion, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Calification not found' });
        }

   return result.rows;
};

export const deleteCalification = async (req, res) => {
    const { id } = req.params;
    
        const result = await pool.query(
            `DELETE FROM doc.calificaciones
                WHERE calificacionId = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Calification not found' });
        }
    return result.rows;
};