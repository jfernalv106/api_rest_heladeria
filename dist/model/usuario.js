"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const UsuarioModel = database_1.default.define("usuario", {
    rut: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    apellido_paterno: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    apellido_materno: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    pass: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    perfil: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    comuna: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    region: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    nacionalidad: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    horas_semanales: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'usuario',
    schema: 'gredo',
    timestamps: false,
});
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.js.map