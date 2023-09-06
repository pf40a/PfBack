const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db.js");

const Reviews = sequelize.define(
  "Reviews",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    /* UsuarioId: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.TEXT,
      //allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    /* fecha: {
      type: DataTypes.DATEONLY,
      allowNull:false,
    } */
  },
  {
    timestamps: true,
  }
);

module.exports = Reviews;
