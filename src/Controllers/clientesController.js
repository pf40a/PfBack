const { Clientes } = require("../Models/Relations")
const moment = require("moment");

// GET ALL CLIENTES
const getClientes = async () => {
    const findClientes = await Clientes.findAll()
    if (!findClientes || !findClientes.length) return { error: "Los clientes aun no fueron subidos a la BD" };
    return { data: findClientes };
  };
  //GET CLIENTE POR ID
  const getClienteById = async (id) => {
    const findCliente = await Clientes.findOne({
      where: {
      doc_Identidad: id,
      },
    }); 
    if (!findCliente) return { error: "El cliente es inexistente o el id es incorrecto" };
    
    return { data: findCliente };
  };
  //POST - CREA UN NUEVO CLIENTE
const postCliente = async (nombre, apellidos, email, tipo_Documento, doc_Identidad, fechaNacimiento, pais, ciudad, nroCelular, direccion) => {
  //Cambia el formato "dd-mm-aaaa"
   fechaNacimiento = moment(fechaNacimiento, "DD-MM-YYYY").format("YYYY-MM-DD");
  const client = await Clientes.findOrCreate({
    where: { doc_Identidad },
    defaults: {
      email,
      nombre,
      apellidos,
      tipo_Documento,
      fechaNacimiento,
      pais,
      ciudad,
      nroCelular,
      direccion,
    },
  });
    ;
    if (!client[1]) return { error: "Cliente ya existente" };
    return { data: client, msg: "Cliente creado" };
  }
  // ELIMINA FISICAMENTE UN CLIENTE
const deleteCliente = async (id) => {
    const ClienteDeleted = await Clientes.destroy({
      where: {
      doc_Identidad: id,
      },
    });
    if(!ClienteDeleted) return {error: "Cliente inexistente o id incorrecto"}
    return {data: ClienteDeleted, msg: "Cliente eliminado exitosamente"}
  };
//ELIMINa LOGICAMENTE UN CLIENTE
const disableClient = async (id) => {
    const Client = await Clientes.update(
        { deleted: true },
        { where: { doc_Identidad: id } }
      );
      
      if (Client[0] === 0) {
        return { error: "Cliente inexistente o id incorrecto" };
      }
      
      return { data: Client[1], msg: "Cliente desactivado exitosamente" };
    };
//ACTUALIZA CLIENTE
const putClient =  async(nombre, apellidos, email, tipo_Documento, fechaNacimiento, pais, ciudad, nroCelular, direccion, deleted, id)=>{

    const cliente = await Clientes.findByPk(id);

    if (!cliente) {
      return { error: "Cliente no encontrado" };
    }


    if (nombre) {
        cliente.nombre = nombre;
      }
      if (apellidos) {
        cliente.apellidos = apellidos;
      }
      if (email) {
        cliente.email = email;
      }
      if (tipo_Documento) {
        cliente.tipo_Documento = tipo_Documento;
      }
  if (fechaNacimiento) {
         fechaNacimiento = moment(fechaNacimiento, "DD-MM-YYYY").format(
           "YYYY-MM-DD"
         );
        cliente.fechaNacimiento = fechaNacimiento;
      }
      if (pais) {
        cliente.pais = pais;
      }
      if (ciudad) {
        cliente.ciudad = ciudad;
      }
      if (nroCelular) {
        cliente.nroCelular = nroCelular;
      }
      if (direccion) {
        cliente.direccion = direccion;
      }
      

      if (deleted && deleted === true) {
        cliente.deleted = true;
      } else {
        cliente.deleted = false;
      }

      
    await cliente.save();

    return { data: cliente, msg: "Cliente actualizado exitosamente" };
}
  module.exports = {
    getClientes,
    getClienteById,
    postCliente,
    deleteCliente,
    disableClient,
    putClient
  }