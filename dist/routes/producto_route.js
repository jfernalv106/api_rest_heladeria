"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controller_1 = require("../controller/productos_controller");
const router = (0, express_1.Router)();
router.get('/', productos_controller_1.getProductos);
router.post('/', productos_controller_1.postProducto);
exports.default = router;
//# sourceMappingURL=producto_route.js.map