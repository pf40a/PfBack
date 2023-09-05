//const getReserva_Filtros = require("../Controllers/FiltrosController")

const { getReserva_Filtros, getFiltroReservasPorUsuario } = require("../Controllers/FiltrosController");

// Ruta para traer las habitaciones disponibles en un periodo de fecha
const getReserva_FiltrosHandler = async (req, res) => {
 // return res.status(200).send("get Reserva Filtros");
  
  try {
    // Obtenemos los parámetros del cuerpo de la solicitud
    const { fechaIngreso, fechaSalida, cantidadPersonas } = req.body;
    const resultado = await getReserva_Filtros(
      fechaIngreso,
      fechaSalida,
      cantidadPersonas
    );

    if (resultado.error) return res.statust(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

const getReservaPorUsuario_FiltrosHandler = async (req, res) => {
  // return res.status(200).send("get Reserva Filtros");

  try {
    // Obtenemos los parámetros del cuerpo de la solicitud
    const { UsuarioId } = req.params;
    const resultado = await getFiltroReservasPorUsuario(
      UsuarioId
    );

    if (resultado.error) return res.statust(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getReserva_FiltrosHandler,
  getReservaPorUsuario_FiltrosHandler,
};
