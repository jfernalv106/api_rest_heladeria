"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controler_1 = require("../controller/usuario_controler");
const router = (0, express_1.Router)();
router.post('/', usuario_controler_1.postUsuario);
exports.default = router;
//# sourceMappingURL=usuario_route.js.map