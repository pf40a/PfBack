const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("./../db");

const Clientes = sequelize.define(
  "Clientes",
  {
    /* id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    }, */

    doc_Identidad: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    //Doc. Identidad, pasaporte, carnet de extranjeria u otro
    tipo_Documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nroCelular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Borrado Logico
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Clientes;
