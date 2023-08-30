// Importando el modelos
const Habitaciones = require("../Models/Habitaciones.js");
const Habitacion_Detalles = require("../Models/Habitacion_Detalles.js");



// Función para obtener todas las Habitaciones
const getRooms = async () => {
  try {
    // Buscar todas las habitaciones
    const findRooms = await Habitaciones.findAll({
      include: [
        {
          model: Habitacion_Detalles,
          attributes: [
            "precio",
            "tipo_Habitacion",
            "subTipo",
            "descripcion",
            "caracteristica",
            "capacidad",
            "image",
          ],
         // through: { attributes: [] },
        },
      ],
    });

    if (!findRooms) {
      return { error: "No hay Habitaciones" };
    }

    return { data: findRooms };
  } catch (error) {
    return { error: "Error al obtener las habitaciones", error };
  }
};

// Función para obtener una habitación por ID
const getRoomsId = async (id) => {
  try {
    //Buscar la habitación por su ID
    const findRoomsId = await Habitaciones.findOne({
      where: { id: id },
      include: [
        {
          model: Habitacion_Detalles,
          attributes: [
            "precio",
            "tipo_Habitacion",
            "subTipo",
            "descripcion",
            "caracteristica",
            "capacidad",
            "image",
          ],
         // through: { attributes: [] },
        },
      ],
    });

    if (!findRoomsId) {
      return { error: `La habitación ${id} que intentas buscar no existe` };
    }

    return { data: findRoomsId };
  } catch (error) {
    return { error: "Error al obtener la habitación por ID", error };
  }
};

// Función para eliminar una habitacion por ID
const deleteRooms = async (id) => {
  try {
    // Eliminar la habitación por su ID
    const deleteRoom = await Habitaciones.destroy({ where: { id: id } });

    if (deleteRoom === 0) {
      return { error: "Habitación no encontrada" };
    }
    
    return { data: deleteRoom, msg: "Habitación eliminada exitosamente" };
  } catch (error) {
    return { error: "Error al eliminar la habitación:", error };
  }
};

// Función para actualizar los detalles de una habitación por ID
const putRooms = async (id, HabitacionDetalleId, nroHabitacion, nivel, estado) => {
  try {
    // Buscar la habitación por su ID
    const putRoom = await Habitaciones.findByPk(id);

    if (!putRoom) {
      return { error: "Habitación no encontrada" };
    }

    // Actualizar los detalles de la habitación
    putRoom.HabitacionDetalleId = HabitacionDetalleId ? HabitacionDetalleId : putRoom.HabitacionDetalleId;
    putRoom.nroHabitacion = nroHabitacion ? nroHabitacion : putRoom.nroHabitacion;
    putRoom.nivel = nivel ? nivel : putRoom.nivel;
    putRoom.estado = estado ? estado : putRoom.estado;

    // Guardar los cambios en la base de datos
    await putRoom.save();

    return {
      data: putRoom,
      msg: "Detalles de habitación actualizados exitosamente",
    };
  } catch (error) {
    return {
      error: "Error al actualizar los detalles de la habitación:",
      error,
    };
  }
};

// Función para agregar una nueva habitación
const postRooms = async (HabitacionDetalleId, nroHabitacion, nivel, estado) => {
  try {
    // Crear una nueva instancia del modelo Habitaciones con los valores proporcionados
    const nuevaHabitacion = await Habitaciones.create({
      HabitacionDetalleId: HabitacionDetalleId,
      nroHabitacion: nroHabitacion,
      nivel: nivel,
      estado: estado,
    });

    return {
      data: nuevaHabitacion,
      msg: "Nueva habitación agregada exitosamente:",
    };
  } catch (error) {
    return { error: "Error al agregar una nueva habitación:", error };
  }
};



module.exports = {
  getRooms,
  getRoomsId,
  putRooms,
  deleteRooms,
  postRooms
};
