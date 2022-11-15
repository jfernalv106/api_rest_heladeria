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
exports.postProducto = exports.getProductos = void 0;
const sequelize_1 = require("sequelize");
const producto_1 = __importDefault(require("../model/producto"));
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let nombre = req.query.nombre;
    let inventariable = req.query.inventariable;
    let descripcion = req.query.descripcion;
    let precioMin = req.query.precioMin;
    let precioMax = req.query.precioMax;
    let parametros = {};
    if (nombre) {
        parametros = Object.assign(Object.assign({}, parametros), { nombre: { [sequelize_1.Op.like]: `%${nombre}%` } });
    }
    if (descripcion) {
        parametros = Object.assign(Object.assign({}, parametros), { descripcion: { [sequelize_1.Op.like]: `%${descripcion}%` } });
    }
    if (precioMin) {
        parametros = Object.assign(Object.assign({}, parametros), { precio: { [sequelize_1.Op.gte]: precioMin } });
    }
    if (precioMax) {
        parametros = Object.assign(Object.assign({}, parametros), { precio: { [sequelize_1.Op.lte]: precioMax } });
    }
    if (inventariable) {
        parametros = Object.assign(Object.assign({}, parametros), { inventariable: inventariable });
    }
    const productos = yield producto_1.default.findAll({
        where: parametros,
        order: ["id"],
    });
    res.json({
        productos,
    });
});
exports.getProductos = getProductos;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const producto = producto_1.default.build(body);
        yield producto.save();
        res.json(producto);
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            token: "",
            mensaje: "ha ocurrido un error",
        });
    }
});
exports.postProducto = postProducto;
//# sourceMappingURL=productos_controller.js.map