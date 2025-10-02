import { pool } from '../db.js';

export const getAllComments = async () => {

        const result = await pool.query('SELECT * FROM doc.comentarios');
        return result.rows;

};

export const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;

        const result = await pool.query('SELECT * FROM doc.comentarios WHERE publicacionId = $1', [postId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No comments found for this post' });
        }
        return result.rows;
};

export const getCommentsByUserId = async (req, res) => {
    const { userId } = req.params;

        const result = await pool.query('SELECT * FROM doc.comentarios WHERE usuarioId = $1', [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No comments found for this user' });
        }
        return result.rows;
};

export const postCreateComment = async (req) => {
    const { comentarioId, publicacionId, comentario, usuarioId } = req.body;

        const result = await pool.query(
            `INSERT INTO doc.comentarios (comentarioId, publicacionId, comentario, usuarioId)
                VALUES ($1, $2, $3, $4) RETURNING *`,
            [comentarioId, publicacionId, comentario, usuarioId]
        );
        return result.rows;
};

export const putUpdateComment = async (req, res) => {
    const { id } = req.params;
    const { comentario } = req.body;

        const result = await pool.query(
            `UPDATE doc.comentarios
                SET comentario = $1
                WHERE comentarioId = $2 RETURNING *`,
            [comentario, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        return result.rows;
};

export const deleteComment = async (req, res) => {
    const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM doc.comentarios
                WHERE comentarioId = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        return result.rows;
};