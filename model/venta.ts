import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface VentaAttributes {
  id: number;
  rut_usuario: string;
  fecha_venta: string;
  fecha_entrega: string;
  estado: string;
  sucursal: number;
  total: number;
  descuento?: number;
  descripcion?: string;
}


const VentaModel =db.define("venta", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  rut_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  fecha_venta: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_entrega: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  total: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  descuento: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
},{
  tableName: 'venta',
  schema: 'gredo',
  timestamps: false,
});

export default VentaModel;