import * as CommentService from '../services/CommentsServices.js';

export const getObtenerTodosLosComentarios = async (req, res) => {
    try {
        const result = await CommentService.getAllComments();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};


export const getObtenerComentariosPorPublicacion = async (req, res) => {
    try {
        const result = await CommentService.getCommentsByPostId();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerComentariosPorUsuario = async (req, res) => {
    try {
        const result = await CommentService.getCommentsByUserId();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const PostCrearComentario = async (req, res) => {
    try {
        const result = await CommentService.postCreateComment();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarComentario = async (req, res) => {
    try {
        const result = await CommentService.putUpdateComment();

        res.status(201).json(result.rows[0]);
    } catch (err) {
       return next(err);
    }
};

export const DeleteEliminarComentario = async (req, res) => {
    try {
        const result = await CommentService.deleteComment();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

