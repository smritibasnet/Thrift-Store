import knexJs from 'knex'

//import * as knexConfig from './knexfile.js'
import knexConfig from "./knexfile.js"

console.log(knexConfig)
/**
 * Database connection.
 */
const knex = knexJs(knexConfig)

export default knex
