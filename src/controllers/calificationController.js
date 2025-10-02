import * as CalificationService from '../services/calificationsServices.js';

export const getObtenerTodasLasCalificaciones = async (req, res, next) => {
    try {
        const result = await CalificationService.getAllCalifications();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};


export const PostCrearCalificacion = async (req, res, next) => {
    try {
        const result = await CalificationService.postCreateCalification();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarCalificacion = async (req, res, next) => {
    try {
        const result = await CalificationService.putUpdateCalification();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const DeleteEliminarComentario = async (req, res, next) => {
    try {
        const result = await CommentService.deleteComment();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};
