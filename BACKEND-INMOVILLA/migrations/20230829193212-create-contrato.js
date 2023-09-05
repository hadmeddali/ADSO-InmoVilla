'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cedula: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Fecha_Nac: {
        type: Sequelize.DATE
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Fecha_Pago: {
        type: Sequelize.DATE
      },
      Estado_Contrato: {
        type: Sequelize.STRING
      },
      Servicios_Incluidos: {
        type: Sequelize.STRING
      },
      Codigo_Vivienda: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Contracts');
  }
};