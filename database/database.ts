import {Sequelize}  from "sequelize";

const host = "postgres://pi:qwerty2123:@25.71.222.70:5432/heladeria";

const db = new Sequelize(host);


export default db;