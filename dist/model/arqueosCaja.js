"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const ArqueoModel = database_1.default.define("arqueo", {
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
    hora: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false
    },
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    total_ventas: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    total_caja: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'arqueos_caja',
    schema: 'gredo',
});
exports.default = ArqueoModel;
//# sourceMappingURL=arqueosCaja.js.map