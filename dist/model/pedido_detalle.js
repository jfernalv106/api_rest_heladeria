"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const PedidoDetalleModel = database_1.default.define("pedido_detalle", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    pedido: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    producto: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'detalle_pedido',
    schema: 'gredo',
    timestamps: false,
});
exports.default = PedidoDetalleModel;
//# sourceMappingURL=pedido_detalle.js.map