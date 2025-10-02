import* as userService from '../services/usersServices.js';

export const getObtenerTodosLosUsuarios = async (req, res) => {
    try {
        const result = await userService.getAllUsers();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorNombre = async (req, res) => {
    try {
        const result = await userService.getUserByNombre();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorApellido = async (req, res) => {
    try {
        const result = await userService.getUserByApellido();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getObtenerUsuariosPorRol = async (req, res) => {
    try {
        const result = await userService.getUserByRol();

        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const PostCrearUsuario = async (req, res) => {
    try {
        const result = await userService.postCreateUser();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const PutActualizarUsuario = async (req, res) => {
    try {
        const result = await userService.putUpdateUser();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

export const DeleteEliminarUsuario = async (req, res) => {
    try {
        const result = await userService.deleteUser();

        res.status(201).json(result.rows[0]);
    } catch (err) {
        return next(err);
    }
};

