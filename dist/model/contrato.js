"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const ContratoModel = database_1.default.define("contrato", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    rut_usuario: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    horas: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'contrato',
    schema: 'gredo',
    timestamps: false,
});
exports.default = ContratoModel;
//# sourceMappingURL=contrato.js.map