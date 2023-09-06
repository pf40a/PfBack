// Importando las funciones de los Controllers
const {
  getRooms,
  getRoomsId,
  putRooms,
  deleteRooms,
  postRooms,
} = require("../Controllers/habitacionesController.js");

// Ruta para obtener todas las Habitaciones
const getHabitacionesHandler = async (req, res) => {
  try {
    const resultado = await getRooms();
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

// Ruta para obtener una habitación por ID
const getHabitacionesByIdHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;
    const resultado = await getRoomsId(id);
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
  } catch (error) {

       return res.status(401).json({ error: error.message });
  }
};

// Ruta para eliminar una habitacion por ID
const deleteHabitacionesHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;
    const resultado = await deleteRooms(id);
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);

  } catch (error) {
       return res.status(401).json({ error: error.message });
  }
};

// Ruta para actualizar una habitación por ID
const putHabitacionesHandler = async (req, res) => {
  try {
    // Obteniendo el ID por params
    const { id } = req.params;

    // Obteniendo los datos por body
    const { HabitacionDetalleId, nroHabitacion, nivel, estado } = req.body;

    const resultado = await putRooms(id, HabitacionDetalleId, nroHabitacion, nivel, estado);
    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);

  } catch (error) {
       return res.status(401).json({ error: error.message });
  }
};

// Ruta para agregar una nueva habitación
const postHabitacionesHandler = async (req, res) => {
  try {
    // Obteniendo los datos por body
    const { HabitacionDetalleId, nroHabitacion, nivel, estado } = req.body;

    // Mandando los datos a la función
    const resultado = await postRooms(HabitacionDetalleId, nroHabitacion, nivel, estado);

    if (resultado.error) {
      return res.status(400).json(resultado);
    }
    return res.status(200).json(resultado);
    
  } catch (error) {
    //return res.status(401).json(error);
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getHabitacionesHandler,
  getHabitacionesByIdHandler,
  deleteHabitacionesHandler,
  putHabitacionesHandler,
  postHabitacionesHandler,
};
