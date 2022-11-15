import { Router } from 'express';
import { postUsuario } from '../controller/usuario_controler';
import { getAsistencia, postAsistencia } from '../controller/asistencia_controllers';

const router: Router = Router();


router.post('/', postAsistencia);
router.get('/', getAsistencia);


export default router;