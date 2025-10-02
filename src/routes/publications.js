import { Router } from 'express';

import * as publicationController from '../controllers/publicationController.js'
import { validarPublicacion} from '../middlewares/validators.js'


const router = Router();

router.get('/', publicationController.getObtenerTodasLasPublicaciones);
router.get('/BuscarPublicacionPorUsuario/:nombreUsuario', publicationController.getObtenerPublicacionesPorUsuario);
router.get('/BuscarTopPublicaciones', publicationController.getObtenerPublicacionesPorTop)

router.post('/',validarPublicacion, publicationController.PostCrearPublicacion);

router.put('/:id', publicationController.PutActualizarPublicacion);

router.delete('/:id', publicationController.DeleteEliminarPublicacion);

export default router;