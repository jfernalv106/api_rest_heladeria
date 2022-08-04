import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface InventarioAttributes {
  id: number;
  rut_usuario: string;
  fecha: string;
  sucursal: number;
  nombre: string;
  descripcion: string;
  estado: string;
  cantidad: number;
  avaluo?: number;
}


const InventarioModel =db.define("inventario", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  rut_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  avaluo: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
},{
  tableName: 'inventario',
  schema: 'gredo',
  timestamps: false,
});

export default InventarioModel;