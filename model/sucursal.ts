import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface SucursalAttributes {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  comuna: string;
  ciudad: string;
  region: string;
  pais: string;
  latitud: string;
  longitud: string;
}

const SucursalModel =db.define("sucursal", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  comuna: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  region: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  latitud: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  longitud: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
},{
  tableName: 'sucursal',
  schema: 'gredo',
  timestamps: false,
});

export default SucursalModel;
