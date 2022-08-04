import { Router } from 'express';
import { getProductos, postProducto } from '../controller/productos_controller';

const router: Router = Router();

router.get('/', getProductos);
router.post('/', postProducto);


export default router;