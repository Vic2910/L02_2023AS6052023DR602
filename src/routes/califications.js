import { Router } from 'express';

import * as calificationController from '../controllers/calificationController.js'
import { validarCalificacion} from '../middlewares/validators.js'



const router = Router();

router.get('/', calificationController.getObtenerTodasLasCalificaciones);

router.post('/', validarCalificacion, calificationController.PostCrearCalificacion);

router.put('/:id', calificationController.PutActualizarCalificacion);

router.delete('/:id', calificationController.DeleteEliminarComentario);

export default router;