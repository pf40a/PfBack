const { DataTypes} = require("sequelize");
const sequelize = require("../db.js");

const Habitacion_Detalles = sequelize.define(
  "Habitacion_Detalles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      
    },
    
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    tipo_Habitacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },

    subTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },

    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },

    caracteristica: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacidad: {
      type: DataTypes.INTEGER,
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

module.exports = Habitacion_Detalles;
