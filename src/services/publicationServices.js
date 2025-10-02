import { pool } from '../db.js';

export const getAllPublications = async (req, res) => {
        const result = await pool.query('SELECT * FROM doc.publicaciones');
        return result.rows;
};

export const getPublicationsByUsername = async (req, res) => {
    const { nombreUsuario } = req.params;

        const result = await pool.query(
            `SELECT p.*, u.nombreUsuario
                FROM doc.publicaciones p
                JOIN doc.usuarios u ON p.usuarioId = u.usuarioId
                WHERE u.nombreUsuario = $1`, [nombreUsuario]);

        return result.rows;
};

export const getTopPublications = async (req, res) => {

    const nRaw = req.query.n;
    const n = nRaw === undefined ? 10 : parseInt(nRaw, 10);

    if (Number.isNaN(n) || n <= 0) {
      return res.status(400).json({ error: 'Parametro n inválido. Debe ser un entero > 0' });
    }

    const query = `
      SELECT
        p.publicacionId,
        p.titulo,
        p.descripcion,
        p.usuarioId,
        COUNT(c.comentarioId)::int AS comentarios_count
      FROM doc.publicaciones p
      LEFT JOIN doc.comentarios c
        ON c.publicacionId = p.publicacionId
      GROUP BY p.publicacionId, p.titulo, p.descripcion, p.usuarioId
      ORDER BY comentarios_count DESC
      LIMIT $1;
    `;

    const result = await pool.query(query, [n]);
    return result.rows;
};


export const postCreatePublication = async (req, res) => {
    const { publicacionId, titulo, descripcion, usuarioId } = req.body;

        const result = await pool.query(
            `INSERT INTO doc.publicaciones (publicacionId, titulo, descripcion, usuarioId)
                VALUES ($1, $2, $3, $4) RETURNING *`,
            [publicacionId, titulo, descripcion, usuarioId]
        );
        return result.rows;
};

export const putUpdatePublication = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    
        const result = await pool.query(
            `UPDATE doc.publicaciones
                SET titulo = $1, descripcion = $2
                WHERE publicacionId = $3 RETURNING *`,
            [titulo, descripcion, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Publication not found' });
        }
        return result.rows;
};

export const deletePublication = async (req, res) => {
    const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM doc.publicaciones
                WHERE publicacionId = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Publication not found' });
        }
        return result.rows;
};