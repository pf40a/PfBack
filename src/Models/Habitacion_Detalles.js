const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../db.js");

const Habitacion_Detalles = sequelize.define(
  "Habitacion_Detalles",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    /* detalleHabitacion_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
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
      type: DataTypes.ARRAY,
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
