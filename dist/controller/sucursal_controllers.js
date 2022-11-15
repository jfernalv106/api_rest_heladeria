"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSucursal = void 0;
const sucursal_1 = __importDefault(require("../model/sucursal"));
const postSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const sucursal = sucursal_1.default.build(body);
        yield sucursal.save();
        res.json(sucursal);
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: "ha ocurrido un error",
        });
    }
});
exports.postSucursal = postSucursal;
//# sourceMappingURL=sucursal_controllers.js.map