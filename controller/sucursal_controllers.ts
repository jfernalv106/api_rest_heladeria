import { Request, Response } from "express";
import SucursalModel from '../model/sucursal';


export const postSucursal = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      const sucursal = SucursalModel.build(body);
      await sucursal.save();
      res.json(sucursal);
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "ha ocurrido un error",
      });
    }
  };
