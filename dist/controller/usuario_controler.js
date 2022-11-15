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
exports.login = exports.postUsuario = void 0;
const usuario_1 = __importDefault(require("../model/usuario"));
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = usuario_1.default.build(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: "ha ocurrido un error",
        });
    }
});
exports.postUsuario = postUsuario;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { usuario, password } = body;
    let parametros = {};
    parametros = Object.assign(Object.assign({}, parametros), { rut: usuario, pass: password });
    try {
        const user = yield usuario_1.default.findAll({
            where: parametros,
            order: ["rut"],
        });
        if (user) {
            res.json({
                ok: true,
                token: '',
                mensaje: ''
            });
        }
        res.json({
            ok: false,
            token: '',
            mensaje: 'Usuario o contraseña incorrecta'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: "ha ocurrido un error",
        });
    }
});
exports.login = login;
//# sourceMappingURL=usuario_controler.js.map