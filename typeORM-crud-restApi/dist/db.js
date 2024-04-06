"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5435,
    username: "postgres",
    password: "navasochoa",
    database: "faztcode_typeorm",
    logging: true,
    entities: [User_1.User],
    synchronize: true,
    subscribers: [],
    migrations: [],
});
