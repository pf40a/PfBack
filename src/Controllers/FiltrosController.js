const { Op } = require("sequelize");
const Habitacion_Detalles = require("../Models/Habitacion_Detalles");
const Habitaciones = require("../Models/Habitaciones");
const Reservas = require("../Models/Reservas");
const Reserva_Items = require("../Models/Reserva_Items");
//const moment = require("moment");
const Clientes = require("../Models/Clientes");
const Reviews = require("../Models/Reviews");

// http://localhost:3001/hotel/filtros
//GET ALL RESERVAS - FILTRADO POR FECHAS
const getReserva_Filtros = async (fechaInicio, fechaFin) => {
  //cambiar el formato de fechas
  console.log(fechaInicio)
  //fechaInicio = moment(fechaInicio, "DD-MM-YYYY").format("YYYY-MM-DD");
  //fechaFin = moment(fechaFin, "DD-MM-YYYY").format("YYYY-MM-DD");
  //return({data: fechaInicio, msg: fechaFin})
  //console.log(fechaInicio)
  //console.log(fechaFin)
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
        attributes: ["fechaIngreso", "fechaSalida", "deleted"],
      },
    ],
  });
  //return {data: listaHabitacionesReservadas}
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

  // Filtra y organiza habitaciones disponibles
  for (const claveGrupo in habitacionesAgrupadas) {
    const habitacionesGrupo = habitacionesAgrupadas[claveGrupo];
    const habitacionesDisponiblesGrupo = habitacionesGrupo.filter(
      (habitacion) => {
        const reservada = listaHabitacionesReservadas.some((reserva) => {
          return (
            reserva.Habitacion.nroHabitacion === habitacion.nroHabitacion &&
            ((reserva.Reserva &&
              reserva.Reserva.fechaIngreso <= fechaFin &&
              ((reserva.Reserva &&
                reserva.Reserva.fechaSalida >= fechaInicio) ||
                (reserva.Reserva && reserva.Reserva.fechaSalida === null))) ||
              (reserva.Reserva &&
                reserva.Reserva.fechaSalida === null &&
                reserva.Reserva && reserva.Reserva.fechaIngreso <= fechaFin))
          );
        });
        return !reservada;
      }
    );
 
    if (habitacionesDisponiblesGrupo.length > 0) {
      const habitacion = habitacionesDisponiblesGrupo[0]; // Tomamos una habitación para obtener datos comunes
      habitacionesDisponibles.push({
        id: habitacion.Habitacion_Detalle.id,
        tipo_Habitacion: habitacion.Habitacion_Detalle.tipo_Habitacion,
        subTipo: habitacion.Habitacion_Detalle.subTipo,
        descripcion: habitacion.Habitacion_Detalle.descripcion,
        caracteristica: habitacion.Habitacion_Detalle.caracteristica,
        precio: habitacion.Habitacion_Detalle.precio,

        //cantidad:1,
        capacidad: habitacion.Habitacion_Detalle.capacidad,
        image: habitacion.Habitacion_Detalle.image,
        habitacion_Disponible: habitacionesDisponiblesGrupo.length,
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

  if (!habitacionesDisponibles)
    return { error: "No hay habitaciones disponibles" };
  return { data: habitacionesDisponibles };
};

//FILTRO RESERVAS POR USUARIO
const getFiltroReservasPorUsuario = async (UsuarioId) => {
  const findReservas = await Reservas.findAll({
    where: {
      UsuarioId: UsuarioId,
    },
    include: [
      {
        model: Clientes,
        attributes: ["doc_Identidad", "nombre", "apellidos", "email"],
      },
      {
        model: Reserva_Items,
        attributes: ["id", "cantidad", "precio", "HabitacionId"],
        include: [
          {
            model: Habitaciones,
            as: "Habitacion",
            attributes: ["nroHabitacion"],
          },
        ],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  if (findReservas === 0) return { error: "No hay reservas" };
  return { data: findReservas };
};
//FILTRO REVIEWS POR USUARIO
const getFiltroReviewPorUsuario = async (UsuarioId) => {
  const findReview = await Reviews.findAll({
    where: {
      UsuarioId: UsuarioId,
    },
    
    order: [["createdAt", "DESC"]],
  });
  if (findReview === 0) return { error: "No hay reviews" };
  return { data: findReview };
};

module.exports = {
  getReserva_Filtros,
  getFiltroReservasPorUsuario,
  getFiltroReviewPorUsuario,
};
