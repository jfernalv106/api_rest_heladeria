import { Request, Response } from "express";
import { Op } from "sequelize";
import ProductoModel from "../model/producto";

export const getProductos = async (req: Request, res: Response) => {
  let nombre = req.query.nombre;
  let descripcion = req.query.descripcion;
  let precioMin = req.query.precioMin;
  let precioMax = req.query.precioMax;

  let parametros = {};
  if (nombre) {
    parametros = { ...parametros, nombre: { [Op.like]: `%${nombre}%` } };
  }
  if (descripcion) {
    parametros = {
      ...parametros,
      descripcion: { [Op.like]: `%${descripcion}%` },
    };
  }
  if (precioMin) {
    parametros = { ...parametros, precio: { [Op.gte]: precioMin } };
  }
  if (precioMax) {
    parametros = { ...parametros, precio: { [Op.lte]: precioMax } };
  }

  const productos = await ProductoModel.findAll({
    where: parametros,
    order: ["id"],
  });

  res.json({
    productos,
  });
};

export const postProducto = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const producto = ProductoModel.build(body);
    await producto.save();
    res.json(producto);
  } catch (error) {
    res.status(500).json({
      ok: false,
      token: "",
      mensaje: "ha ocurrido un error",
    });
  }
};
