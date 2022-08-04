import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface PermisoAttributes {
  rut: string;
  permiso: string;
}


const PermisosModel =db.define("permiso", {
  rut: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  permiso: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  }
},{
  tableName: 'permisos',
  schema: 'gredo',
  timestamps: false,
});

export default PermisosModel;