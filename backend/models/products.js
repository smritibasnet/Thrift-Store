'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  Products.belongsTo(models.c)
    }
  }
  Products.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    count_in_stock: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    num_reviews: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};