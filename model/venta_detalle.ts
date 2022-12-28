import { DataTypes, literal, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface VentaDetalleAttributes {
  id: number;
  venta: number;
  producto: number;
  cantidad: number;
}


const VentaDetalleModel =db.define("venta_detalle", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    defaultValue: literal("nextval('gredo.seq_detalle_venta')"),
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
    type: DataTypes.BIGINT,
    allowNull: false
  }
},{
  tableName: 'venta_detalle',
  schema: 'gredo',
  timestamps: false,
});

export default VentaDetalleModel;