import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface PedidoAttributes {
  id: number;
  rut_usuario: string;
  fecha_pedido: string;
  fecha_entrega: string;
  estado: string;
  sucursal: number;
  total: string;
  descripcion?: string;
}


const PedidoModel =db.define("pedido", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  rut_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  fecha_pedido: {
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
    type: DataTypes.STRING(20),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
},{
  tableName: 'pedido',
  schema: 'gredo',
  timestamps: false,
});

export default PedidoModel;