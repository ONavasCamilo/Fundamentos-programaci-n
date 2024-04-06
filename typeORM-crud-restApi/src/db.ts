import { DataSource } from 'typeorm'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5435,
    username: "postgres",
    password: "navasochoa",
    database: "faztcode_typeorm",
    logging: true,
    entities: [User],
    synchronize: true,
    subscribers: [],
    migrations: [],
})
