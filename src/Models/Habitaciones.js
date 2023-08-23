const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db.js");

const Habitaciones = sequelize.define(
  "Habitaciones",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    /* HabitacionDetalleId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    nroHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reservado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
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
