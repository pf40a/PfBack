const Habitacion_Detalles = require("../Models/Habitacion_Detalles");
const Habitaciones = require("../Models/Habitaciones");
const SubTipo_Habitaciones = require("../Models/SubTipo_Habitaciones");
const datos_Habitacion_Detalle = require("./datos_Habitacion_Detalle");
const datos_habitaciones = require("./datos_Habitaciones");
const datos_SubTipo_Habitaciones = require("./datos_SubTipo_Hatitaciones");
//const datos_SubTipo_Habitaciones = require("./datos_subTipo_Habitaciones");
//http://localhost:3001/hotel/habitaciones/alldatos
const postAllHabitaciones = async (req, res) => {
  try {
    // CARGAR DATOS A HABITACION_DETALLES
    const datosHabitaciones = await Habitacion_Detalles.findAndCountAll();

    if (datosHabitaciones.count === 0) {
      datos_Habitacion_Detalle.map(async (el) => {
        await Habitacion_Detalles.create({
          precio: el.precio,
          tipo_Habitacion: el.tipo_Habitacion,
          subTipo: el.subTipo,
          descripcion: el.descripcion,
          caracteristica: el.caracteristica,
          capacidad: el.capacidad,
          image: el.image,
        });
      });
    }
    //CARGAR DATOS A TABLA - SUBTIPO_HABITACIONES
    const subTipo = await SubTipo_Habitaciones.findAndCountAll();
    
    if (subTipo.count === 0) {
      datos_SubTipo_Habitaciones.map(async (el) => {
        await SubTipo_Habitaciones.create({
          subTipo: el.subTipo,
          descripcion: el.descripcion,
          image: el.image,
        });
      });
    }
    //CARGAR DATOS A HABITACIONES
    const HabitacionesData = await Habitaciones.findAndCountAll();

    if (HabitacionesData.count === 0) {
      datos_habitaciones.map(async (el) => {
        await Habitaciones.create({
          HabitacionDetalleId: el.HabitacionDetalleId,
          nroHabitacion: el.nroHabitacion,
          estado: el.estado,
          nivel: el.nivel,
        });
      });
      return res.status(200).json({ msg: "Se cargaron las habitaciones" });
    }
    return res.status(200).json({ msg: "Ya existen datos de Habitaciones" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = postAllHabitaciones;
