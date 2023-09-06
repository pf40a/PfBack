const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db.js");

const Habitaciones = sequelize.define(
  "Habitaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    /* HabitacionDetalleId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    nroHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    //Anulada, Activo, Inactivo
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Habitaciones;
