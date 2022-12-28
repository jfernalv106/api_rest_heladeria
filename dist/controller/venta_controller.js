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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postVenta = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const venta_1 = __importDefault(require("../model/venta"));
const venta_detalle_1 = __importDefault(require("../model/venta_detalle"));
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const ventaCaja = body;
    console.log(ventaCaja);
    const { id, venta_detalle } = ventaCaja, resto = __rest(ventaCaja, ["id", "venta_detalle"]);
    let det = [];
    const query = "UPDATE gredo.producto AS p SET stock=(p.stock-vd.cantidad) FROM gredo.venta_detalle AS vd WHERE  vd.producto=p.id AND vd.id=:id";
    try {
        const venta = venta_1.default.build(resto);
        yield venta.save();
        venta_detalle === null || venta_detalle === void 0 ? void 0 : venta_detalle.forEach((arc) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const { id } = arc, resto = __rest(arc, ["id"]);
            resto.venta = venta.getDataValue("id");
            const detalle = yield venta_detalle_1.default.create(resto);
            yield detalle.save();
            yield det.push(detalle.getDataValue("id"));
            const parametros = {
                id: detalle.getDataValue("id"),
            };
            console.log(det);
            yield ((_a = venta_detalle_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(query, {
                replacements: parametros,
                type: sequelize_1.default.QueryTypes.UPDATE,
            }));
        }));
        det.forEach((detalle) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(detalle);
        }));
        res.json(venta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            token: "",
            mensaje: "ha ocurrido un error",
        });
    }
});
exports.postVenta = postVenta;
//# sourceMappingURL=venta_controller.js.map