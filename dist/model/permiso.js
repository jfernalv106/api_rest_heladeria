"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const PermisosModel = database_1.default.define("permiso", {
    rut: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    },
    permiso: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'permisos',
    schema: 'gredo',
    timestamps: false,
});
exports.default = PermisosModel;
//# sourceMappingURL=permiso.js.map