const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../db.js");

const Reserva_Items = sequelize.define(
  "Reserva_Item",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    //Por relación se creará estos campos
    /* ReservaId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */

    /* HabitacionId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    precio: {
      type: DataTypes.DOUBLE,
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

module.exports = Reserva_Items;
