// Importando las funciones de los Controllers
const {
  getRooms,
  getRoomsId,
  putRooms,
  deleteRooms,
  postRooms,
} = require("../Controllers/habitacion_DetallesController.js");

// Ruta para obtener todas las Habitaciones
const getHabitacionDetallesHandler = async (req, res) => {
  try {
    const resultado = await getRooms();
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};

// Ruta para obtener una habitación por ID
const getHabitacionDetallesByIdHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;
    const resultado = await getRoomsId(id);
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};

// Ruta para eliminar una habitacion por ID
const deleteHabitacionDetallesHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;
    const resultado = await deleteRooms(id);
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};

// Ruta para actualizar los detalles de una habitación por ID
const putHabitacionDetallesHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;

    // Obteniendo los datos por body
    const {
      precio,
      tipo_Habitacion,
      subTipo,
      descripcion,
      caracteristica,
      capacidad,
      image,
    } = req.body;

    const resultado = await putRooms(
      id,
      precio,
      tipo_Habitacion,
      subTipo,
      descripcion,
      caracteristica,
      capacidad,
      image
    );
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};

// Ruta para agregar una nueva habitación
const postHabitacionDetallesHandler = async (req, res) => {
  try {
    // Obteniendo los datos por body
    const {
      precio,
      tipo_Habitacion,
      subTipo,
      descripcion,
      caracteristica,
      capacidad,
      image,
    } = req.body;

    // Mandando los datos a la función
    const resultado = await postRooms(
      precio,
      tipo_Habitacion,
      subTipo,
      descripcion,
      caracteristica,
      capacidad,
      image
    );

    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports = {
  getHabitacionDetallesHandler,
  getHabitacionDetallesByIdHandler,
  putHabitacionDetallesHandler,
  deleteHabitacionDetallesHandler,
  postHabitacionDetallesHandler,
};
