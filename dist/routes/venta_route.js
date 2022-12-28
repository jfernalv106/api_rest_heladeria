"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_controller_1 = require("../controller/venta_controller");
const router = (0, express_1.Router)();
router.post('/', venta_controller_1.postVenta);
exports.default = router;
//# sourceMappingURL=venta_route.js.map