import { Request, Response } from "express";
import UsuarioModel from '../model/usuario';
import { mensaje } from '../socket/sockets';


export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      const usuario = UsuarioModel.build(body);
      await usuario.save();
      res.json(usuario);
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "ha ocurrido un error",
      });
    }
  };
export const login = async (req: Request, res: Response) => {
    const { body } = req;
    const {usuario,password}=body;
    let parametros = {};
  
      parametros = { ...parametros, rut:usuario,pass:password };
    
    try {
      const user = await UsuarioModel.findAll({
        where: parametros,
        order: ["rut"],
      });
      if(user){
        res.json({
          ok:true,
          token:'',
          mensaje:''
        });
      }
      res.json({
        ok:false,
        token:'',
        mensaje:'Usuario o contraseña incorrecta'
      });

    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "ha ocurrido un error",
      });
    }
  };