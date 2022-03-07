import { PRODUCTS } from '../constants/table'
/**
 * Create table PRODUCTS.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable(PRODUCTS, (table) => {
    table.increments()
    table.string('name')
    table.text('image').nullable()
    table.text('description')
    table.string('brand')
    table.string('category')
    table.string('price')
    table.integer('count_in_stock').nullable()
    table.string('rating').nullable()
    table.string('num_reviews').nullable()
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'))
  })
}

/**
 * Drop PRODUCTS.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable(PRODUCTS)
}
