'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false   // required
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,  // required
      unique: true
    },
    phNumber: {
      type: DataTypes.STRING,
      allowNull: false   // required
    },
    iqamaNumber: {
      type: DataTypes.STRING,
      allowNull: false   // required
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false   // required
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true    // optional
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true    // optional
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};