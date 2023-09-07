const { getCarrito, getCarritoByIdUsuario, postCarrito, deleteCarrito, putCarrito } = require("../Controllers/carritoController");

// Ruta para traer Datos del Carrito
const getCarritoHandler = async (req, res) => {
  try {
    const response = await getCarrito();
    if (response.error) {
      return res.status(401).json({ error: response.error });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
//Ruta para trar Carrito por id de Usuario
const getCarritoByIdHandler = async (req, res) => {
  try {
    const { UsuarioId } = req.params;
    const response = await getCarritoByIdUsuario(UsuarioId);
    if (response.error) {
      return res.status(401).json({ error: response.error });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//Ruta para crear un Carrito

const postCarritoHandler = async (req, res) => {
  try {
    const {
      id,
      UsuarioId,
      subTipo,
      tipo_Habitacion,
      image,
      dias,
      quantityTotal,
      importe,
    } = req.body;

    const response = await postCarrito(
      id,
      UsuarioId,
      subTipo,
      tipo_Habitacion,
      image,
      dias,
      quantityTotal,
      importe
    );

    if (response.error) return res.status(400).json(response.error);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//Ruta para eliminar CARRITO

const deleteCarritoHandler = async (req, res) => {
  try {
    const { UsuarioId } = req.params;
    const response = await deleteCarrito(UsuarioId);

    if (response.error) return res.status(401).json(response.error);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


//Rura para actualizar datos del Carrito

const putCarritoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      UsuarioId,
      subTipo,
      tipo_Habitacion,
      image,
      dias,
      quantityTotal,
      importe,
    } = req.body;

    const response = await putCarrito(
      id,
      UsuarioId,
      subTipo,
      tipo_Habitacion,
      image,
      dias,
      quantityTotal,
      importe
    );

    if (response.error) return res.status(401).json(response.error);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getCarritoHandler,
  getCarritoByIdHandler,
  postCarritoHandler,
  deleteCarritoHandler,
  putCarritoHandler,
};
