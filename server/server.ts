import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import socketIO from 'socket.io';
import http from 'http';
import db from '../database/database';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import path from "path";
import * as socket from '../socket/sockets';
import productoRoute from '../routes/producto_route';


export default class Server{
    private static _intance: Server;
    public app:Application;
    public port: string;
    public io: socketIO.Server;
    private httpServer: http.Server;
    private apiPatch = {
        producto: '/api/producto',       
    };

    private constructor(){
        this.app = express();
        this.app.use(express.json({limit: '80mb'}));
        
        this.app.use(
            fileUpload({
                abortOnLimit: false,
                createParentPath: false,
                debug: false,
                limitHandler: false,
                parseNested: false,
                preserveExtension: false,
                responseOnLimit: 'proper messsage',
                safeFileNames: false,
                tempFileDir: '/temp',
                uploadTimeout: 30 * 1_000,
                uriDecodeFileNames: true,
                useTempFiles: false,
            }),
        );
        
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.port = process.env.PORT || '80';
        this.httpServer = http.createServer(this.app);
        this.io = new socketIO.Server(this.httpServer, { cors: { origin: '*' } });
        this.dbConnection();
        this.routes();
        this.escucharSockets();
    }
    public static get instance() {
        return this._intance || (this._intance = new this());
    }
    async dbConnection() {

       
        try {
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log('error base de datos');
        }

    }
    routes() {
        this.app.use(this.apiPatch.producto, productoRoute);
     
        
         this.app.get("*", (req: Request, res: Response) => {
           res.sendFile(path.resolve( "./public/index.html"));
         }); 
      
        
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo puerto: ' + this.port);
        });
    }
    private escucharSockets() {

        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            console.log('Cliente conectado');
            socket.mensaje(cliente, this.io);
            socket.desconectar(cliente);

        });

    }
    start(callback: VoidFunction) {

        this.httpServer.listen(this.port, callback);

    }
}