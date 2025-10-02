import * as publicationService from '../services/publicationServices.js';

export const getObtenerTodasLasPublicaciones = async (req, res, next) => {
    try {
        const result = await publicationService.getAllPublications();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerPublicacionesPorUsuario = async (req, res, next) => {
    try {
        const result = await publicationService.getPublicationsByUsername(req);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerPublicacionesPorTop = async (req, res, next) => {
    try {
        const result = await publicationService.getTopPublications(req, res);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};


export const PostCrearPublicacion = async (req, res, next) => {
    try {
        const result = await publicationService.postCreatePublication(req);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarPublicacion = async (req, res, next) => {
    try {
        const result = await publicationService.putUpdatePublication(req, res);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const DeleteEliminarPublicacion = async (req, res, next) => {
    try {
        const result = await publicationService.deletePublication(req, res);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

