const { Op } = require("sequelize");
const Habitacion_Detalles = require("../Models/Habitacion_Detalles");
const Habitaciones = require("../Models/Habitaciones");
const Reservas = require("../Models/Reservas");
const Reserva_Items = require("../Models/Reserva_Items");
const moment = require("moment");

// http://localhost:3001/hotel/filtros
//GET ALL RESERVAS - FILTRADO POR FECHAS
const getReserva_Filtros = async (fechaInicio, fechaFin, cantidadPersonas) => {
  //cambiar el formato de fechas
  fechaInicio = moment(fechaInicio, "DD-MM-YYYY").format("YYYY-MM-DD");
  fechaFin = moment(fechaFin, "DD-MM-YYYY").format("YYYY-MM-DD");
  //return({data: fechaInicio, msg: fechaFin})
  const listaHabitaciones = await Habitaciones.findAll({
    include: [
      {
        model: Habitacion_Detalles, //Habitacion_Detalle
        attributes: [
          "id",
          "precio",
          "tipo_Habitacion",
          "subTipo",
          "descripcion",
          "caracteristica",
          "capacidad",
          "image",
        ],
      },
    ],
  });
  //return {data: listaHabitaciones}
  const listaHabitacionesReservadas = await Reserva_Items.findAll({
    include: [
      {
        model: Habitaciones, //Habitacion
        as: "Habitacion",
        attributes: ["nroHabitacion"],
      },
      {
        model: Reservas, //Reserva
        attributes: ["fechaIngreso", "fechaSalida"],
      },
    ],
  });
  const habitacionesDisponibles = [];
  // Agrupar habitaciones por tipo, subtipo, descripcion, caracteristica y capacidad
  const habitacionesAgrupadas = {};
  listaHabitaciones.forEach((habitacion) => {
    const {
      id,
      tipo_Habitacion,
      subTipo,
      descripcion,
      caracteristica,
      capacidad,
      image,
    } = habitacion.Habitacion_Detalle;
    const claveGrupo = `${tipo_Habitacion}-${subTipo}-${descripcion}-${caracteristica}-${capacidad}-${image}`;

    if (!habitacionesAgrupadas[claveGrupo]) {
      habitacionesAgrupadas[claveGrupo] = [];
    }
    habitacionesAgrupadas[claveGrupo].push(habitacion);
  });

  // Filtrar y organizar habitaciones disponibles
  for (const claveGrupo in habitacionesAgrupadas) {
    const habitacionesGrupo = habitacionesAgrupadas[claveGrupo];
    const habitacionesDisponiblesGrupo = habitacionesGrupo.filter(
      (habitacion) => {
        const reservada = listaHabitacionesReservadas.some((reserva) => {
          return (
            reserva.Habitacion.nroHabitacion === habitacion.nroHabitacion &&
            ((reserva.Reserva.fechaIngreso <= fechaFin &&
              (reserva.Reserva.fechaSalida >= fechaInicio ||
                reserva.Reserva.fechaSalida === null)) ||
              (reserva.Reserva.fechaSalida === null &&
                reserva.Reserva.fechaIngreso <= fechaFin))
          );
        });
        return !reservada;
      }
    );

    if (habitacionesDisponiblesGrupo.length > 0) {
      const habitacion = habitacionesDisponiblesGrupo[0]; // Tomamos una habitación de ejemplo para obtener datos comunes
      habitacionesDisponibles.push({
        id: habitacion.Habitacion_Detalle.id,
        tipo_Habitacion: habitacion.Habitacion_Detalle.tipo_Habitacion,
        subTipo: habitacion.Habitacion_Detalle.subTipo,
        descripcion: habitacion.Habitacion_Detalle.descripcion,
        caracteristica: habitacion.Habitacion_Detalle.caracteristica,
        precio: habitacion.Habitacion_Detalle.precio,
        capacidad: habitacion.Habitacion_Detalle.capacidad,
        image: habitacion.Habitacion_Detalle.image,
        habitaciones: habitacionesDisponiblesGrupo.map((el) => {
          return {
            id: el.id,
            nroHabitacion: el.nroHabitacion,
            estado: el.estado,
            nivel: el.nivel,
          };
        }),
      });
    }
  }
  
  if(!habitacionesDisponibles) return {error: "No hay habitaciones disponibles"}
  return { data: habitacionesDisponibles };
  
};

module.exports = getReserva_Filtros;
