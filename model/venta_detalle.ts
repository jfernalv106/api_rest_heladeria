import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface detalleVentumAttributes {
  id: number;
  venta: number;
  producto: number;
  cantidad: string;
}


const VentaDetalleModel =db.define("venta_detalle", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  venta: {
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
  tableName: 'detalle_venta',
  schema: 'gredo',
  timestamps: false,
});

export default VentaDetalleModel;