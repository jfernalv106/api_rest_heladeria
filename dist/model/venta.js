"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const VentaModel = database_1.default.define("venta", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    rut_usuario: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    fecha_venta: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_entrega: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    descuento: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    }
}, {
    tableName: 'venta',
    schema: 'gredo',
    timestamps: false,
});
exports.default = VentaModel;
//# sourceMappingURL=venta.js.map