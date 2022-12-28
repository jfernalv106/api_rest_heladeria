import { DataTypes, literal, Model, Optional } from 'sequelize';
import db from '../database/database';
import { VentaDetalleAttributes } from './venta_detalle';

export interface VentaAttributes {
  id: number;
  folio:number;
  rut_usuario: string;
  fecha_venta: string;
  estado: string;
  sucursal: number;
  total: number;
  descuento?: number;
  descripcion?: string;
  venta_detalle?:VentaDetalleAttributes[];
}


const VentaModel =db.define("venta", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    defaultValue: literal("nextval('gredo.seq_venta')"),
  },
  folio: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: literal("nextval('gredo.seq_venta')"),
    
  },
  pedido_cliente: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: literal("nextval('gredo.seq_venta')"),
    
  },
  rut_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  fecha_venta: {
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


