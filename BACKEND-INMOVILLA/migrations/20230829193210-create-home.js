'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Homes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo_Vivienda: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Latitud: {
        type: Sequelize.DOUBLE
      },
      Longitud: {
        type: Sequelize.DOUBLE
      },
      Cant_Cuartos: {
        type: Sequelize.STRING
      },
      Caracteristicas_Extra: {
        type:Sequelize.STRING
      },
      Tiene_Servicios_Incluidos: {
        type: Sequelize.STRING
      },
     
      Area_Inmueble: {
        type: Sequelize.STRING
      },
      Precio: {
        type: Sequelize.DOUBLE
      },
      Descripcion: {
        type: Sequelize.STRING
      // },
      // Imagen: {
      //   type: Sequelize.JSONB
      },
      Imagen: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      Tiene_Garaje_Moto: {
        type: Sequelize.STRING
      },
      
      Tiene_Garaje_Carro: {
        type: Sequelize.STRING
      },
      Tiene_Patio: {
        type: Sequelize.STRING
      },
      Cant_Baños: {
        type: Sequelize.STRING
      },
      Precio_Venta: {
        type: Sequelize.STRING
      },
      Estado:{
        type: Sequelize.STRING,
      },
      Amueblado:{
        type: Sequelize.STRING,
      },
      AgentId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Agents",
            key:"id"
          }
        }
      },
      TypehousingId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Typehousings",
            key:"id"
          }
        }
      },
      TypetargetId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Typetargets",
            key:"id"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Homes');
  }
};