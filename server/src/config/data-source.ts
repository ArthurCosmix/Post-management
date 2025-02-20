import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import {Post} from '../entities/Post.js'
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} from './env-variable.js'

const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Post]
}

export default new DataSource(dataSourceOptions)