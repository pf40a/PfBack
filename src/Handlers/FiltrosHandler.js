//const getReserva_Filtros = require("../Controllers/FiltrosController")

const { getReserva_Filtros, getFiltroReservasPorUsuario, getFiltroReviewPorUsuario } = require("../Controllers/FiltrosController");

// Ruta para traer las habitaciones disponibles en un periodo de fecha
const getReserva_FiltrosHandler = async (req, res, next) => {
 // return res.status(200).send("get Reserva Filtros");
  
  try {
    // Obtenemos los parámetros del cuerpo de la solicitud
    let { fechaIngreso, fechaSalida, cantidadPersonas } = req.body;
   // console.log(fechaIngreso)
    if (fechaIngreso === null || fechaIngreso === undefined) {
       fechaIngreso = new Date()
    }

    if (fechaSalida === null || fechaSalida === undefined) {
      fechaSalida = new Date();
      fechaSalida.setDate(fechaSalida.getDate() + 30);
    }
    const resultado = await getReserva_Filtros(
      fechaIngreso,
      fechaSalida,
      cantidadPersonas
    );

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    //return res.status(401).json({ error: error.message });
    next(error);
  }
}
// FILTRO DE RESERVAS POR USUARIO
const getReservaPorUsuario_FiltrosHandler = async (req, res) => {
  // return res.status(200).send("get Reserva Filtros");

  try {
    const { UsuarioId } = req.params;
    const resultado = await getFiltroReservasPorUsuario(
      UsuarioId
    );

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const getReviewsPorUsuario_FiltrosHandler = async (req, res) => {
  // return res.status(200).send("get Reserva Filtros");

  try {
    
    const { UsuarioId } = req.params;
    const resultado = await getFiltroReviewPorUsuario(UsuarioId);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getReserva_FiltrosHandler,
  getReservaPorUsuario_FiltrosHandler,
  getReviewsPorUsuario_FiltrosHandler,
};
