"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const database_1 = __importDefault(require("../database/database"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const socket = __importStar(require("../socket/sockets"));
const producto_route_1 = __importDefault(require("../routes/producto_route"));
class Server {
    constructor() {
        this.apiPatch = {
            producto: '/api/producto',
        };
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json({ limit: '80mb' }));
        this.app.use((0, express_fileupload_1.default)({
            abortOnLimit: false,
            createParentPath: false,
            debug: false,
            limitHandler: false,
            parseNested: false,
            preserveExtension: false,
            responseOnLimit: 'proper messsage',
            safeFileNames: false,
            tempFileDir: '/temp',
            uploadTimeout: 30 * 1000,
            uriDecodeFileNames: true,
            useTempFiles: false,
        }));
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)());
        this.port = process.env.PORT || '80';
        this.httpServer = http_1.default.createServer(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, { cors: { origin: '*' } });
        this.dbConnection();
        this.routes();
        this.escucharSockets();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                console.log('error base de datos');
            }
        });
    }
    routes() {
        this.app.use(this.apiPatch.producto, producto_route_1.default);
        this.app.get("*", (req, res) => {
            res.sendFile(path_1.default.resolve("./public/index.html"));
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo puerto: ' + this.port);
        });
    }
    escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
            socket.mensaje(cliente, this.io);
            socket.desconectar(cliente);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map