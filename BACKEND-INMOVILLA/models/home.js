'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Home.belongsTo(models.Agent);
      models.Agent.hasMany(Home);

      Home.belongsToMany(models.Owner,{
        through: "home_owner",
        as:'agents'
      })

      Home.belongsToMany(models.Service,{
        through: "HomeService",
        as:"services"
      })

      Home.belongsTo(models.Typehousing);
      models.Typehousing.hasMany(Home);

      Home.belongsTo(models.Typetarget);
      models.Typetarget.hasMany(Home);
    }
  }
  Home.init({
    Codigo_Vivienda: DataTypes.INTEGER,
    Ubicacion: DataTypes.STRING,
    Cant_Cuartos: DataTypes.STRING,
    Caracteristicas_Extra: DataTypes.STRING,
    Tiene_Servicios_Incluidos: DataTypes.STRING,
    Tipo_Objeto: DataTypes.STRING,
    Area_Inmueble: DataTypes.STRING,
    Precio: DataTypes.DOUBLE,
    Descripcion: DataTypes.STRING,
    Tiene_Garaje_Moto: DataTypes.STRING,
    Tipo_Vivienda: DataTypes.STRING,
    Tiene_Garaje_Carro: DataTypes.STRING,
    Tiene_Patio: DataTypes.STRING,
    Cant_Baños: DataTypes.STRING,
    Precio_Venta: DataTypes.STRING,
    FKId_Agente: DataTypes.INTEGER,
    typeHousing: DataTypes.INTEGER,
    typeTarget: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Home',
  });
  return Home;
};