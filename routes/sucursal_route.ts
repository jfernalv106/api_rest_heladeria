import { Router } from 'express';
import { postSucursal } from '../controller/sucursal_controllers';

const router: Router = Router();


router.post('/', postSucursal);


export default router;