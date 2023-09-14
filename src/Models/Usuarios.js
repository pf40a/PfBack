const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db.js");

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    password: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    googleUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //Borrado lógico
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //createdAt  //updatedAt
  },
  {
    timestamps: true,
  }
);

module.exports = Usuarios;
