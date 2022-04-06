'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Black Body Con',
          image: '/images/partywear.png',
          description:
            'Black Body Con Party Wear is in good condition and has been worn once by its previous owner ',
          brand: 'FabIndia',
          category_id: 1,
          price: 3999.99,
          count_in_stock: 1,
          rating: 4.5,
          num_reviews: 12,
        },
        {
          name: 'Summer Wear One-Piece',
          image: '/images/summerWearr.png',
          description:
            'Summer Wear is in best condition and has been worn by former Miss Nepal in a promotion event',
          brand: 'Urban Girl',
          category_id: 2,
          price: 999.99,
          count_in_stock: 1,
          rating: 4.0,
          num_reviews: 8,
        },
        {
          name: 'Maroon One-Piece',
          image: '/images/maroondresss.png',
          description: 'Maroon One-Piece is in good condition.',
          brand: 'Unknown',
          category_id: 3,
          price: 929.99,
          count_in_stock: 1,
          rating: 3,
          num_reviews: 12,
        },
        {
          name: 'Pink One-piece',
          image: '/images/pinkdresss.png',
          description:
            'Pink One-piece has never been worn by its previous owner and is brand new',
          brand: 'Unknown ',
          category_id: 3,
          price: 1999.99,
          count_in_stock: 1,
          rating: 5,
          num_reviews: 12,
        },
        {
          name: 'Blue Prom Dress',
          image: '/images/promdresss.png',
          description: 'Blue Prom Dress is in its best condition',
          brand: 'Boutique Item',
          category_id: 4,
          price: 10000,
          count_in_stock: 1,
          rating: 5,
          num_reviews: 10,
        },
        {
          name: 'Light Green Spring Wear',
          image: '/images/springwearr.png',
          description: 'Spring Wear is in good condition',
          brand: 'Unknown',
          category_id: 3,
          price: 999.99,
          count_in_stock: 1,
          rating: 4,
          num_reviews: 12,
        },
        {
          name: 'Red One-Piece',
          image: '/images/reddresss.png',
          description: 'Red Dress is in good condition',
          brand: 'Juniper',
          category_id: 5,
          price: 2099.99,
          count_in_stock: 1,
          rating: 4.5,
          num_reviews: 14,
        },
        {
          name: 'Yellow One-piece',
          image: '/images/yellowdresss.png',
          description: 'Yellow One-piece is in good condition',
          brand: 'Fashion Australia',
          category_id: 6,
          price: 1999.99,
          count_in_stock: 1,
          rating: 4.5,
          num_reviews: 6,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  },
}
