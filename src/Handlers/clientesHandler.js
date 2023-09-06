const { getClientes, getClienteById, postCliente, deleteCliente, disableClient, putClient } = require("../Controllers/clientesController") 

// Ruta para traer a todos los Cliente
const getClientesHandler = async (req, res) => {
    try {
      const response = await getClientes()
      if (response.error) {
        return res.status(401).json({ error: response.error });
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(401).json({error: error.message})
    }
  }
  //Ruta para trar cliente por id
  const getClientByIdHandler = async(req, res) =>{

    try {
      const {id} = req.params
      const response = await getClienteById(id);
      if (response.error) {
        return res.status(401).json({ error: response.error });
      }
      return res.status(200).json(response);
  
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  //Ruta para crear cliente
  const postClientHandler = async(req, res) =>{
   
      try {
        const { nombre, apellidos, email, tipo_Documento, doc_Identidad, fechaNacimiento, pais, ciudad, nroCelular, direccion } = req.body
       
        const response = await postCliente(nombre, apellidos, email, tipo_Documento, doc_Identidad, fechaNacimiento, pais, ciudad, nroCelular, direccion);
    
        if (response.error) return res.status(400).json(response.error);
        return res.status(200).json(response);
    
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    };
    //Ruta para eliminar cliente
    const deleteClientHandler = async(req, res) =>{

        try {
          const {id} = req.params
          const response = await deleteCliente(id);
      
          if (response.error) return res.status(401).json(response.error);
          return res.status(200).json(response);
      
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      };

//Ruta para hacer un DESABLE a un user
const disableClientHandler = async(req, res) =>{
    try {
      const {id} = req.params
      const response = await disableClient(id);
  
      if (response.error) return res.status(401).json(response.error);
      return res.status(200).json(response);
  
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
//Rura para actualizar cliente
  const putClientHandler = async(req, res) =>{
  try {
    const { id } = req.params
    const {nombre, apellidos, email, tipo_Documento, fechaNacimiento, pais, ciudad, nroCelular, direccion, deleted} = req.body
    const response = await putClient(nombre, apellidos, email, tipo_Documento, fechaNacimiento, pais, ciudad, nroCelular, direccion, deleted, id);
    
    if (response.error) return res.status(401).json(response.error);
    return res.status(200).json(response);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
    module.exports = {
        postClientHandler,
        getClientByIdHandler,
        getClientesHandler,
        deleteClientHandler,
        disableClientHandler,
        putClientHandler
    }