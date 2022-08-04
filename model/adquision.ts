import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface AdquisionAttributes {
  id: number;
  rut_usuario: string;
  fecha: string;
  sucursal: number;
  total: number;
  producto: number;
}


const adquisionModel =db.define("adquisicion", {
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
  total: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  producto: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
},{
    timestamps: false,
    tableName: 'adquision',
    schema: 'gredo',
});

export default adquisionModel;