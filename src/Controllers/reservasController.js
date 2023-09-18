const Reservas = require("../Models/Reservas")
const Clientes  = require("../Models/Clientes")

const moment = require("moment");
const Reserva_Items = require("../Models/Reserva_Items");
const Habitaciones = require("../Models/Habitaciones");

// GET ALL RESERVAS
const getReservas = async () => {
    const findReservas = await Reservas.findAll({
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
    if (findReservas == 0) return { error: "No hay reservas"}
    return { data: findReservas}
}
//GET RESERVA BY ID
const getReservasById = async (id) => {
    const findReserva = await Reservas.findByPk(id, {
      include: [
        {
            model: Clientes,
            attributes: ['doc_Identidad', 'nombre', 'apellidos', 'email']
        },
        {
          model: Reserva_Items,
          attributes: ["id","cantidad", "precio", "HabitacionId"],
          include: [
            {
              model: Habitaciones,
              as: "Habitacion",
              attributes: ["nroHabitacion"],
            },
          ],
        },  
      ]
    })

    if (!findReserva) return { error: "Reserva no existe"};
    return { data: findReserva};
}

//DELETE RESERVA BY ID
const deleteReservas = async (id) => {
    const reservaEliminada = await Reservas.destroy({
        where: {
        id: id,
        },
    })

  if (reservaEliminada === 0) {
    return {error: "Reserva no encontrada"}
  }
  //Eliminar los Items de esa Reserva
  await Reserva_Items.destroy({ where: { ReservaId: null } })
  
    if(!reservaEliminada) return {error: "Reserva no existe"}
    return { data: reservaEliminada, msg: "Reserva eliminada"}
}

//DISABLE RESERVA
const disableReservas = async (id) => {
    const findReserva = await Reservas.findByPk(id)
    
    if(!findReserva) return { error: "Esta Reserva no existe"}
    await findReserva.update({deleted: true})
    await findReserva.save()
    return { data: findReserva, msg: "Reserva desactivada"}
}

//POST - CREA UNA NUEVA RESERVA
const postReservas = async (fechaIngreso, fechaSalida, adultos, ninos, pago_Estado, UsuarioId, ClienteDocIdentidad) => {
  
  //CAMBIAR EL FORMATO
  //"dd-mm-aaaa"
  //  fechaIngreso = moment(fechaIngreso, "DD-MM-YYYY").format("YYYY-MM-DD");
  // fechaSalida = moment(fechaSalida, "DD-MM-YYYY").format("YYYY-MM-DD");


    const nuevaReserva = await Reservas.create({
        fechaIngreso, 
        fechaSalida, 
        adultos, 
        ninos, 
        pago_Estado,
        UsuarioId,
        ClienteDocIdentidad 
    });

    return { data: nuevaReserva, msg: "Reserva creada"};
}

//ACTUALIZAR UNA RESERVA
const putReservas = async (id, fechaIngreso, fechaSalida, adultos, ninos, deleted, pago_Estado) => {
    const findReserva = await Reservas.findByPk(id)
    if (!findReserva) return { error: "Esta Reserva no existe"}

  if (fechaIngreso) {
   // fechaIngreso = moment(fechaIngreso, "DD-MM-YYYY").format("YYYY-MM-DD");
    findReserva.fechaIngreso = fechaIngreso;
  }
  if (fechaSalida) {
   // fechaSalida = moment(fechaSalida, "DD-MM-YYYY").format("YYYY-MM-DD")
    findReserva.fechaSalida = fechaSalida;
  }
    if(adultos) findReserva.adultos = adultos
    if(ninos) findReserva.ninos = ninos
  if (deleted === true) {
    findReserva.deleted = true;
  } else {
    findReserva.deleted = false
  }
  if (pago_Estado) findReserva.pago_Estado = pago_Estado
  
  await findReserva.save()

    if(!findReserva) return { error: "No se guardaron los cambios"}
    return { data: findReserva, msg: "Reserva actualizada"}
}

module.exports = {
  getReservas, 
    getReservasById, 
    deleteReservas, 
    disableReservas, 
    postReservas, 
    putReservas
}