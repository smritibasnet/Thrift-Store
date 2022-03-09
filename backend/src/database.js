import knexJs from "knex";

import knexConfig from "./knexfile.js";

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);

export default knex;
