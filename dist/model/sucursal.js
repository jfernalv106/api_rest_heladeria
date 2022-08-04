"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const SucursalModel = database_1.default.define("sucursal", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    comuna: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    region: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    pais: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    latitud: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    longitud: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    }
}, {
    tableName: 'sucursal',
    schema: 'gredo',
    timestamps: false,
});
exports.default = SucursalModel;
//# sourceMappingURL=sucursal.js.map