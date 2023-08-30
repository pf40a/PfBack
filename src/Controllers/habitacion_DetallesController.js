// Importando el modelo
const Habitacion_Detalles = require("../Models/Habitacion_Detalles.js");
const Habitaciones = require("../Models/Habitaciones.js");

// Función para obtener todas las Habitaciones
const getRooms = async () => {
  try {
    // Buscar todas las habitaciones
    const findRooms = await Habitacion_Detalles.findAll();

    if (!findRooms) {
      return { error: "No hay Habitaciones" };
    }

    return { data: findRooms };
  }
  catch (error) {
    return { error: "Error al obtener las habitaciones", error };
  }
};

// Función para obtener una habitación por ID
const getRoomsId = async (id) => {
  try {
    //Buscar la habitación por su ID
    const findRoomsId = await Habitacion_Detalles.findByPk(id);

    if (!findRoomsId) {
      return { error: `La habitación ${id} que intentas buscar no existe` };
    }

    return { data: findRoomsId };
  }
  catch (error) {
    return { error: "Error al obtener la habitación por ID", error };
  }
};

// Función para eliminar una habitacion por ID
const deleteRooms = async (id) => {
  try {
    // Eliminar la habitación por su ID
    const deleteRoom = await Habitacion_Detalles.destroy({ where: { id: id } });

    if (deleteRoom === 0) {
      return { error: "Habitación no encontrada" };
    }

    // Eliminar las habitaciones de este Detalle
    await Habitaciones.destroy({
      where: {
        HabitacionDetalleId: null,
      },
    });

    return { data: deleteRoom, msg: "Habitación eliminada exitosamente" };
  }
  catch (error) {
    return { error: "Error al eliminar la habitación:", error };
  }
};

// Función para actualizar los detalles de una habitación por ID
const putRooms = async (
  id,
  precio,
  tipo_Habitacion,
  subTipo,
  descripcion,
  caracteristica,
  capacidad,
  image
) => {
  try {
    // Buscar la habitación por su ID
    const putRoom = await Habitacion_Detalles.findByPk(id);

    if (!putRoom) {
      return { error: "Habitación no encontrada" };
    }

    // Actualizar los detalles de la habitación
    putRoom.precio = precio ? precio : putRoom.precio;
    putRoom.tipo_Habitacion = tipo_Habitacion ? tipo_Habitacion : putRoom.tipo_Habitacion;
    putRoom.subTipo = subTipo ? subTipo : putRoom.subTipo;
    putRoom.descripcion = descripcion ? descripcion : putRoom.descripcion;
    putRoom.caracteristica = caracteristica ? caracteristica : putRoom.caracteristica;
    putRoom.capacidad = capacidad ? capacidad : putRoom.capacidad;
    putRoom.image = image ? image : putRoom.image;

    // Guardar los cambios en la base de datos
    await putRoom.save();

    return {
      data: putRoom,
      msg: "Detalles de habitación actualizados exitosamente",
    };
  }
  catch (error) {
    return {
      error: "Error al actualizar los detalles de la habitación:",
      error,
    };
  }
};

// Función para agregar una nueva habitación
const postRooms = async (
  precio,
  tipo_Habitacion,
  subTipo,
  descripcion,
  caracteristica,
  capacidad,
  image
) => {
  try {
    // Crear una nueva instancia del modelo Habitacion_Detalles con los valores proporcionados
    const nuevaHabitacion = await Habitacion_Detalles.create({
      precio: precio,
      tipo_Habitacion: tipo_Habitacion,
      subTipo: subTipo,
      descripcion: descripcion,
      caracteristica: caracteristica,
      capacidad: capacidad,
      image: image,
    });

    return {
      data: nuevaHabitacion,
      msg: "Nueva habitación agregada exitosamente:",
    };
  }
  catch (error) {
    return { error: "Error al agregar una nueva habitación:", error };
  }
};

module.exports = {
  getRooms,
  getRoomsId,
  putRooms,
  deleteRooms,
  postRooms,
};
