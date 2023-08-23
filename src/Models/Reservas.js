const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db.js");

const Reservas = sequelize.define(
  "Reservas",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    /* usuarioId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    /* clienteId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */

    fechaIngreso: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaSalida: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    adultos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ninos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //Anulada, Activo,
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pago_Estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //createdAt  //updatedAt
  },
  {
    timestamps: true,
  }
);

module.exports = Reservas;