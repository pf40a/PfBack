const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const Carrito = sequelize.define(
  "Carrito",
  {
    //id del producto - (HabitacionDetalleId)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    //Por relación se creará estos campos
    /* UsuarioId: {
      type: DataTypes.STRING,
    }, */

    subTipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_Habitacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantityTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    importe: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Carrito
