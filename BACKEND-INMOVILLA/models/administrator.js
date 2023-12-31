'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Administrator.init({
    Nombre_Admin: DataTypes.STRING,
    Email_Admin: DataTypes.STRING,
    Telefono_Admin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administrator',
  });
  return Administrator;
};