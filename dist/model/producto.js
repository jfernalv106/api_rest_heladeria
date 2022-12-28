"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const ProductoModel = database_1.default.define("producto", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        defaultValue: (0, sequelize_1.literal)("nextval('gredo.seq_producto')"),
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    sucursal: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    volumen: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true
    },
    peso: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true
    },
    inventariable: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'producto',
    schema: 'gredo',
    timestamps: false,
});
exports.default = ProductoModel;
//# sourceMappingURL=producto.js.map