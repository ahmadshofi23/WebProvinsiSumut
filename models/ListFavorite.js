const { DataTypes } = require('sequelize');
const db = require('../database');

const ListFavorite = db.define('List_Favorite', {
  favorite_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING(100),
  image: {
    type: DataTypes.STRING(100),
  },
  caption: {
    type: DataTypes.STRING(500),
  },
});

module.exports = ListFavorite;
