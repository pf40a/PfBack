const { Clientes } = require("../Models/Relations")

// GET ALL CLIENTES
const getClientes = async () => {
    const findClientes = await Clientes.findAll()
    if (!findClientes) return { error: "Los clientes aun no fueron subidos a la BD" };
    return { data: findClientes };
  };
  //GET CLIENTE POR ID
  const getClienteById = async (id) => {
    const findCliente = await Clientes.findOne({
      where: {
      id: id,
      },
    });
    if (!findCliente) return { error: "El cliente es inexistente o el id es incorrecto" };
    
    return { data: findCliente };
  };
  //POST - CREA UN NUEVO CLIENTE
const postCliente = async (nombre, apellidos, email, tipo_Documento, doc_Identidad, fechaNacimiento, pais, ciudad, nroCelular, direccion ) => {
    const client = await Clientes.findOrCreate({ where: {
         email,
         nombre,
         apellidos,
         tipo_Documento,
         doc_Identidad,
         fechaNacimiento,
         pais,
         ciudad,
         nroCelular,
         direccion 
     } });
    ;
    if (!client[1]) return { error: "Cliente ya existente" };
    return { data: client, msg: "Cliente creado" };
  }
  // ELIMINA FISICAMENTE UN CLIENTE
const deleteCliente = async (id) => {
    const ClienteDeleted = await Clientes.destroy({
      where: {
      id: id,
      },
    });
    if(!ClienteDeleted) return {error: "Cliente inexistente o id incorrecto"}
    return {data: ClienteDeleted, msg: "Cliente eliminado exitosamente"}
  };
//ELIMINa LOGICAMENTE UN CLIENTE
const disableClient = async (id) => {
    const Client = await Clientes.update(
        { deleted: true },
        { where: { id: id } }
      );
      
      if (Client[0] === 0) {
        return { error: "Cliente inexistente o id incorrecto" };
      }
      
      return { data: Client[1], msg: "Cliente desactivado exitosamente" };
    };
//ACTUALIZA CLIENTE
const putClient =  async(nombre, apellidos, email, tipo_Documento, doc_Identidad, fechaNacimiento, pais, ciudad, nroCelular, direccion, id)=>{

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
      if (doc_Identidad) {
        cliente.doc_Identidad = doc_Identidad;
      }
      if (fechaNacimiento) {
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