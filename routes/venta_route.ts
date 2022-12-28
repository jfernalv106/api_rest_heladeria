import { Router } from 'express';
import { postVenta } from '../controller/venta_controller';

const router: Router = Router();


router.post('/', postVenta);


export default router;