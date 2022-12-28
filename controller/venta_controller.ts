import { Request, Response } from "express";
import Sequelize from "sequelize";
import VentaModel from "../model/venta";
import { VentaAttributes } from "../model/venta";
import VentaDetalleModel from "../model/venta_detalle";

export const postVenta = async (req: Request, res: Response) => {
  const { body } = req;
  const ventaCaja: VentaAttributes = body;
  console.log(ventaCaja);
  const { id, venta_detalle, ...resto } = ventaCaja;
  let det: any[] = [];

  const query =
    "UPDATE gredo.producto AS p SET stock=(p.stock-vd.cantidad) FROM gredo.venta_detalle AS vd WHERE  vd.producto=p.id AND vd.id=:id";

  try {
    const venta = VentaModel.build(resto);
    await venta.save();

    venta_detalle?.forEach(async (arc) => {
      const { id, ...resto } = arc;
      resto.venta = venta.getDataValue("id");
      const detalle = await VentaDetalleModel.create(resto);
      await detalle.save();
      await det.push(detalle.getDataValue("id"));

      const parametros = {
        id: detalle.getDataValue("id"),
      };
      console.log(det);
      await VentaDetalleModel.sequelize?.query(query, {
        replacements: parametros,
        type: Sequelize.QueryTypes.UPDATE,
      });
    });

    det.forEach(async (detalle) => {
        console.log(detalle);
    });

    res.json(venta);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      token: "",
      mensaje: "ha ocurrido un error",
    });
  }
};
