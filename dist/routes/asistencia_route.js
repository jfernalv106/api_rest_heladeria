"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistencia_controllers_1 = require("../controller/asistencia_controllers");
const router = (0, express_1.Router)();
router.post('/', asistencia_controllers_1.postAsistencia);
router.get('/', asistencia_controllers_1.getAsistencia);
exports.default = router;
//# sourceMappingURL=asistencia_route.js.map