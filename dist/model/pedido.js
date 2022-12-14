"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const PedidoModel = database_1.default.define("pedido", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    rut_usuario: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    fecha_pedido: {
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
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    }
}, {
    tableName: 'pedido',
    schema: 'gredo',
    timestamps: false,
});
exports.default = PedidoModel;
//# sourceMappingURL=pedido.js.map