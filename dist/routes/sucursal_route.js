"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursal_controllers_1 = require("../controller/sucursal_controllers");
const router = (0, express_1.Router)();
router.post('/', sucursal_controllers_1.postSucursal);
exports.default = router;
//# sourceMappingURL=sucursal_route.js.map