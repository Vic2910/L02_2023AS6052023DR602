import { Router } from 'express';

import * as commentController from '../controllers/commentController.js'
import { validarComentario} from '../middlewares/validators.js'


const router = Router();

router.get('/', commentController.getObtenerTodosLosComentarios);
router.get('/BuscarComentarioPorPublicacionId/:postId', commentController.getObtenerComentariosPorPublicacion);
router.get('/BuscarComentarioPorUsuarioId/:userId', commentController.getObtenerComentariosPorUsuario);

router.post('/',validarComentario, commentController.PostCrearComentario);

router.put('/:id', commentController.PutActualizarComentario);

router.delete('/:id', commentController.DeleteEliminarComentario);



export default router;