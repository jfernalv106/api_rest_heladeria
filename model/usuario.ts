import { DataTypes, Model, Optional } from 'sequelize';
import db from '../database/database';

export interface usuarioAttributes {
  rut: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  email: string;
  pass: string;
  perfil: string;
  fecha_nacimiento: Date;
  sucursal: number;
  direccion: string;
  comuna: string;
  telefono: string;
  region: string;
  nacionalidad: string;
  horas_semanales: number;
}



const UsuarioModel =db.define("usuario", {
  rut: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  apellido_paterno: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  apellido_materno: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  pass: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  perfil: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  comuna: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  region: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  horas_semanales: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  tableName: 'usuario',
  schema: 'gredo',
  timestamps: false,
});

export default UsuarioModel;
