import {Sequelize}  from "sequelize";

const host = "postgres://pi:qwerty2123:@192.168.0.8:5432/heladeria";

const db = new Sequelize(host);


export default db;