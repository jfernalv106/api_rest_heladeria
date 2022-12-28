import { DataTypes, literal } from 'sequelize';
import db from '../database/database';

export interface ProductoAttributes {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  sucursal: number;
  volumen?: number;
  peso?: number;
  inventariable?:string;
  codigo?:string;
  cantidad?:number;
}

const ProductoModel =db.define("producto", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    defaultValue: literal("nextval('gredo.seq_producto')"),
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  precio: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  stock: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  sucursal: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  volumen: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  peso: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },

  inventariable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
},{
  tableName: 'producto',
  schema: 'gredo',
  timestamps: false,
});

export default ProductoModel;


