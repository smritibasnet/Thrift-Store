'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Party Wear',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Summer Wear',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'One-Piece',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Prom Dress',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gown',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Casual Wear',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  },
}
