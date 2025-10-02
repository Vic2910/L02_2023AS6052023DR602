import * as CommentService from '../services/CommentsServices.js';

export const getObtenerTodosLosComentarios = async (req, res, next) => {
    try {
        const result = await CommentService.getAllComments();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};


export const getObtenerComentariosPorPublicacion = async (req, res, next) => {
    try {
        const result = await CommentService.getCommentsByPostId(req, res);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerComentariosPorUsuario = async (req, res, next) => {
    try {
        const result = await CommentService.getCommentsByUserId(req, res);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const PostCrearComentario = async (req, res, next) => {
    try {
        const result = await CommentService.postCreateComment(req);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarComentario = async (req, res, next) => {
    try {
        const result = await CommentService.putUpdateComment(req, res);

        res.status(201).json(result.rows[0]);
    } catch (err) {
       return next(err);
    }
};

export const DeleteEliminarComentario = async (req, res, next) => {
    try {
        const result = await CommentService.deleteComment(req, res);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

