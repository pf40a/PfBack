const { Op } = require("sequelize");
const Habitacion_Detalles = require("../Models/Habitacion_Detalles");
const Habitaciones = require("../Models/Habitaciones");
const Reservas = require("../Models/Reservas");
const Reserva_Items = require("../Models/Reserva_Items");
const sequelize = require("../db");


//GET ALL RESERVAS - FILTRADO POR FECHAS Y CANTIDAD
const getReserva_Filtros = async (fechaInicio, fechaFin, cantidadPersonas) => {
 
    // Lista de Habitaciones con información de Habitacion_Detalles
    const listaHabitaciones = await Habitaciones.findAll({
      //attributes: [nroHabitacion],
      include: [
        {
          model: Habitacion_Detalles,
          attributes: ["precio", "tipo_Habitacion","subTipo", "descripcion", "caracteristica", "capacidad","image"],
        },
      ],
    });
    //return { data: listaHabitaciones};
    // Lista de Habitaciones reservadas con fechas de reserva
    const listaHabitacionesReservadas = await Reserva_Items.findAll({
      //attributes: [],
      include: [
        {
          model: Habitaciones,
          as:'Habitacion',
          attributes: ["nroHabitacion"],
        },
        {
          model: Reservas,
          attributes: ["fechaIngreso", "fechaSalida"],
        },
      ],
    });
//return { data: listaHabitacionesReservadas };
    // Filtro de habitaciones disponibles en el período de fechas
    const habitacionesDisponibles = listaHabitaciones.filter((habitacion) => {
      const reservada = listaHabitacionesReservadas.some((reserva) => {
        return (
          reserva.Habitacion.nroHabitacion ===
            habitacion.nroHabitacion &&
          ((reserva.Reserva.fechaIngreso <= fechaFin &&
            (reserva.Reserva.fechaSalida > fechaInicio)||
               reserva.Reserva.fechaSalida === null)) ||
            (reserva.Reserva.fechaSalida === null &&
              reserva.Reserva.fechaIngreso <= fechaFin)
        );
      });

      
      return !reservada;
    });

  return { data: habitacionesDisponibles };
  //};
}


module.exports = getReserva_Filtros;


