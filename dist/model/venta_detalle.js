"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const VentaDetalleModel = database_1.default.define("venta_detalle", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        defaultValue: (0, sequelize_1.literal)("nextval('gredo.seq_detalle_venta')"),
    },
    venta: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    producto: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'venta_detalle',
    schema: 'gredo',
    timestamps: false,
});
exports.default = VentaDetalleModel;
//# sourceMappingURL=venta_detalle.js.map