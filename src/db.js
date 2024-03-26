import { createPool } from 'mysql2/promise'
import * as config from './config.js'


export const Pool = createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
  database: config.DB_DATABASE,
})

export default Pool;