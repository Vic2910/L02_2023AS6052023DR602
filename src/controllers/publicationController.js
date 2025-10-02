import * as publicationService from '../services/publicationServices.js';

export const getObtenerTodasLasPublicaciones = async (req, res) => {
    try {
        const result = await publicationService.getAllPublications();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerPublicacionesPorUsuario = async (req, res) => {
    try {
        const result = await publicationService.getPublicationsByUsername();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerPublicacionesPorTop = async (req, res) => {
    try {
        const result = await publicationService.getTopPublications();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};


export const PostCrearPublicacion = async (req, res) => {
    try {
        const result = await publicationService.postCreatePublication();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarPublicacion = async (req, res) => {
    try {
        const result = await publicationService.putUpdatePublication();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const DeleteEliminarPublicacion = async (req, res) => {
    try {
        const result = await publicationService.deletePublication();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

