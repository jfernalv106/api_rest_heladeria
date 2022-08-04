import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface ContratoAttributes {
  id: number;
  rut_usuario: string;
  fecha: string;
  horas: number;
  sucursal: number;
}



const ContratoModel =db.define("contrato", {
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
  horas: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
},{
  tableName: 'contrato',
    schema: 'gredo',
    timestamps: false,
});

export default ContratoModel;