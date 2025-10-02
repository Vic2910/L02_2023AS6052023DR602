import* as userService from '../services/usersServices.js';

export const getObtenerTodosLosUsuarios = async (req, res, next) => {
    try {
        const result = await userService.getAllUsers();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorNombre = async (req, res, next) => {
    try {
        const result = await userService.getUserByName(req);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorApellido = async (req, res, next) => {
    try {
        const result = await userService.getUserByApellido(req);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorRol = async (req, res, next) => {
    try {
        const result = await userService.getUserByRol(req);

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const PostCrearUsuario = async (req, res, next) => {
    try {
        const result = await userService.postCreateUser(req);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarUsuario = async (req, res, next) => {
    try {
        const result = await userService.putUpdateUser(req);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const DeleteEliminarUsuario = async (req, res, next) => {
    try {
        const result = await userService.deleteUser(req);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

