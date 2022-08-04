"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const host = "postgres://pi:qwerty2123:@192.168.0.8:5432/heladeria";
const db = new sequelize_1.Sequelize(host);
exports.default = db;
//# sourceMappingURL=database.js.map