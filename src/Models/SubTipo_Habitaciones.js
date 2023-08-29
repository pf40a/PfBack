const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const SubTipo_Habitaciones = sequelize.define(
  "SubTipo_Habitaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    subTipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },

  {
    timestamps: false,
  }
);

module.exports = SubTipo_Habitaciones;
