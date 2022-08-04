import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface PedidoDetalleAttributes {
  id: number;
  pedido: number;
  producto: number;
  cantidad: string;
}


const PedidoDetalleModel =db.define("pedido_detalle", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  pedido: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  producto: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
},{
  tableName: 'detalle_pedido',
  schema: 'gredo',
  timestamps: false,
});

export default PedidoDetalleModel;