import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface ArqueosCajaAttributes {
  id: number;
  rut_usuario: string;
  fecha: string;
  hora: string;
  sucursal: number;
  total_ventas: number;
  total_caja: number;
}


const ArqueoModel =db.define("arqueo", {
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
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  total_ventas: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  total_caja: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
},{
    timestamps: false,
    tableName: 'arqueos_caja',
    schema: 'gredo',
});

export default ArqueoModel;