'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    static associate(models) {}
  }
  transactions.init({
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};