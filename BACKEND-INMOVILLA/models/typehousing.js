'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Typehousing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Typehousing.init({
    Nombre: DataTypes.STRING,
    CodTipoVivienda: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Typehousing',
  });
  return Typehousing;
};