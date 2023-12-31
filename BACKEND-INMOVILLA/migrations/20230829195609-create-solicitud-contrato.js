'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contractRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Solicitud: {
        type: Sequelize.INTEGER
      },
      Codigo_Solicitud: {
        type: Sequelize.INTEGER
      },
      Desprendible_Pago1: {
        type: Sequelize.STRING
      },
      Desprendible_Pago2: {
        type: Sequelize.STRING
      },
      Desprendible_Pago3: {
        type: Sequelize.STRING
      },
      Fecha_Solicitud: {
        type: Sequelize.DATE
      },
      Estado_Solicitud: {
        type: Sequelize.STRING
      },
      Aprobacion_Inquilino: {
        type: Sequelize.STRING
      },
      Carta_Laboral: {
        type: Sequelize.STRING
      },
      FKCedula_Inquilino: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Tenants",
            id:"id"
          }
        }
      },
      FKCodigo_Contrato: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Contracts",
            id:"id"
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
    await queryInterface.dropTable('contractRequests');
  }
};