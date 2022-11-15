import { Request, Response } from "express";
import AsistenciaModel, { AsistenciaAttributes } from '../model/asistencia';
import { extraeHora, formateaFecha } from "../utils/utils";



export const postAsistencia = async (req: Request, res: Response) => {
    const { body } = req;

  const marcar={ 
      rut_usuario: body.rut,
      fecha: formateaFecha(new Date),
      hora: extraeHora(new Date()),
      sucursal: body.sucursal,
      tipo: body.tipo
  }
    try {
      const asistencia = AsistenciaModel.build(marcar);
      await asistencia.save();
      res.json(asistencia);
    } catch (error) {
        console.log(error);
      res.status(500).json({
        ok: false,
        mensaje: "ha ocurrido un error",
      });
    }
  };

  export const getAsistencia = async (req: Request, res: Response) => {
    let rut = req.query.rut;
    let fecha = req.query.fecha;
   
  
    let parametros = {};
    if (rut) {
      parametros = { ...parametros, rut: rut };
    }
    if (fecha) {
      parametros = {
        ...parametros,
        fecha:fecha,
      };
    }
    const asistencia = await AsistenciaModel.findAll({
      where: parametros,
      order: ["hora","rut_usuario"],
    });
  
    res.json({
        asistencia,
    });
  };
  
