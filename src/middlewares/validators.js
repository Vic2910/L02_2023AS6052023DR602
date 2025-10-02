import { body, param, validationResult } from 'express-validator';

export const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


export const validarUsuario = [
    body('rolId')
        .isInt().withMessage('rolId debe ser un número entero')
        .notEmpty().withMessage('rolId es obligatorio'),
    body('nombreUsuario')
        .trim().notEmpty().withMessage('nombreUsuario es obligatorio')
        .isLength({ min: 3, max: 50 }).withMessage('nombreUsuario debe tener entre 3 y 50 caracteres'),
    body('clave')
        .trim().notEmpty().withMessage('clave es obligatoria')
        .isLength({ min: 6 }).withMessage('clave debe tener al menos 6 caracteres'),
    body('nombre')
        .trim().notEmpty().withMessage('nombre es obligatorio')
        .isLength({ min: 2, max: 50 }).withMessage('nombre debe tener entre 2 y 50 caracteres'),
    body('apellido')
        .trim().notEmpty().withMessage('apellido es obligatorio')
        .isLength({ min: 2, max: 50 }).withMessage('apellido debe tener entre 2 y 50 caracteres'),
    validarCampos
];


export const validarPublicacion = [
    body('titulo')
        .trim().notEmpty().withMessage('titulo es obligatorio')
        .isLength({ min: 3, max: 100 }).withMessage('titulo debe tener entre 3 y 100 caracteres'),
    body('descripcion')
        .trim().notEmpty().withMessage('descripcion es obligatoria')
        .isLength({ min: 5, max: 1000 }).withMessage('descripcion debe tener entre 5 y 1000 caracteres'),
    body('usuarioId')
        .isInt().withMessage('usuarioId debe ser un número entero')
        .notEmpty().withMessage('usuarioId es obligatorio'),
    validarCampos
];


export const validarComentario = [
    body('publicacionId')
        .isInt().withMessage('publicacionId debe ser un número entero')
        .notEmpty().withMessage('publicacionId es obligatorio'),
    body('usuarioId')
        .isInt().withMessage('usuarioId debe ser un número entero')
        .notEmpty().withMessage('usuarioId es obligatorio'),
    body('comentario')
        .trim().notEmpty().withMessage('comentario es obligatorio')
        .isLength({ min: 1, max: 500 }).withMessage('comentario debe tener entre 1 y 500 caracteres'),
    validarCampos
];


export const validarCalificacion = [
    body('publicacionId')
        .isInt().withMessage('publicacionId debe ser un número entero')
        .notEmpty().withMessage('publicacionId es obligatorio'),
    body('usuarioId')
        .isInt().withMessage('usuarioId debe ser un número entero')
        .notEmpty().withMessage('usuarioId es obligatorio'),
    body('calificacion')
        .isInt({ min: 1, max: 5 }).withMessage('calificacion debe ser un número entre 1 y 5')
        .notEmpty().withMessage('calificacion es obligatoria'),
    validarCampos
];
