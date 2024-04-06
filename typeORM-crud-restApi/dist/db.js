"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5435,
    username: "postgres",
    password: "navasochoa",
    database: "faztcode_typeorm",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
