import { Request, Response } from "express";
import VentaModel from "../model/venta";
import { VentaAttributes } from "../model/venta";
import VentaDetalleModel from "../model/venta_detalle";

export const postVenta = async (req: Request, res: Response) => {
  const { body } = req;
  const ventaCaja: VentaAttributes = body;
  console.log(ventaCaja);
  const { id, venta_detalle, ...resto } = ventaCaja;

  try {
    const venta = VentaModel.build(resto);
    await venta.save();

    venta_detalle?.forEach(async (arc) => {
      const { id, ...resto } = arc;
      resto.venta = venta.getDataValue("id");
      const detalle = await VentaDetalleModel.create(resto );
      await detalle.save();
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
