"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const InventarioModel = database_1.default.define("inventario", {
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
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    avaluo: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true
    }
}, {
    tableName: 'inventario',
    schema: 'gredo',
    timestamps: false,
});
exports.default = InventarioModel;
//# sourceMappingURL=inventario.js.map