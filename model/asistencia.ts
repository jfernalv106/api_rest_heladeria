import { DataTypes, literal, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface AsistenciaAttributes {
  id?: number;
  rut_usuario: string;
  fecha: Date;
  hora: Date;
  sucursal: number;
  tipo: string;
}


const AsistenciaModel =db.define("asistencia", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: literal("nextval('gredo.seq_asistencia')"),
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
  tipo: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
},{
  tableName: 'asistencia',
  schema: 'gredo',
  timestamps: false,
});

export default AsistenciaModel;