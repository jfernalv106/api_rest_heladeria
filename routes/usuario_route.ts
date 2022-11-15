import { Router } from 'express';
import { postUsuario } from '../controller/usuario_controler';

const router: Router = Router();


router.post('/', postUsuario);


export default router;