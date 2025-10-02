import { Router } from 'express';

import * as userController from '../controllers/usersController.js'
import { validarUsuario} from '../middlewares/validators.js'


const router = Router();

router.get('/', userController.getObtenerTodosLosUsuarios);
router.get('/BuscarUsuarioPorNombre/:nombre', userController.getObtenerUsuariosPorNombre);
router.get('/BuscarUsuarioPorApellido/:apellido', userController.getObtenerUsuariosPorApellido);
router.get('/BuscarUsuarioPorRol/:rol', userController.getObtenerUsuariosPorRol);

router.post('/', validarUsuario, userController.PostCrearUsuario);

router.put('/:usuarioId', userController.PutActualizarUsuario);

router.delete('/:usuarioId', userController.DeleteEliminarUsuario);

export default router;