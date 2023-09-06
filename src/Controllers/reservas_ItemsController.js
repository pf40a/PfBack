const Habitaciones = require("../Models/Habitaciones")
const Reserva_Items = require("../Models/Reserva_Items")
//const Reservas = require("../Models/Reservas")

//GET ALL RESERVAS ITEMS
const getReserva_Items = async () => {
  
    const findReservasItems = await Reserva_Items.findAll()
    if (!findReservasItems || !findReservasItems.length) return { error: "No hay Reservas Items"}
    return { data: findReservasItems }
}

//GET RESERVA ITEM BY ID
const getReserva_ItemsById = async (id) => {
    const findReservaItem = await Reserva_Items.findOne({
        where: {
            id: id,
        },
    })
    if(!findReservaItem) return { error: "Reserva Item no existe"}
    return { data: findReservaItem }
}

//DELETE RESERVA ITEM
const deleteReserva_Items = async (id) => {
    const reservaItemEliminado = await Reserva_Items.destroy({
        where: {
            id: id,
        },
    })

    if(reservaItemEliminado === 0) return { error: "Reserva Item no existe"}
    return { data: reservaItemEliminado, msg: "Reserva Item eliminado"}
}

//DISABLE RESERVA ITEM
const disableReserva_Items = async (id) => {
    const findReservaItem = await Reserva_Items.findOne({
        where: {
            id: id,
        },
    })
    if(!findReservaItem) return { error: "Reserva Item no existe"}
    await findReservaItem.update({deleted: true})
    await findReservaItem.save()
    return { data: findReservaItem, msg: "Reserva Item desactivada"}
}

//CREAR UNA RESERVA ITEM
const postReserva_Items = async ( precio, cantidad, HabitacionId, ReservaId ) => {
    const nuevoReservaItem = await Reserva_Items.create({
      precio,
      cantidad,
      ReservaId,
       HabitacionId
    })
    

    // const reserva = await Reservas.findByPk(ReservaId)
    // const habitacion = await Habitaciones.findByPk(HabitacionId)

    // await nuevoReservaItem.addReservas(reserva)
    // await nuevoReservaItem.addHabitacion(habitacion)
    return { data: nuevoReservaItem, msg: "Reserva Item creada"}
}

// MODIFICAR RESERVA ITEM
const putReserva_Items = async (id, precio, cantidad, HabitacionId) => {
    const findReservaItem = await Reserva_Items.findByPk(id)
    if(!findReservaItem) return { error: "Reserva Item no existe" }

  if (precio) findReservaItem.precio = precio
  if(cantidad) findReservaItem.cantidad=cantidad
  if(HabitacionId) findReservaItem.HabitacionId=HabitacionId

    await findReservaItem.save()

    if(!findReservaItem) return { error: "Nose se guardo el cambio"}
    return { data: findReservaItem, msg: "Reserva Item actualizada"}
}

module.exports = {
    getReserva_Items,
    getReserva_ItemsById,
    deleteReserva_Items,
    disableReserva_Items,
    postReserva_Items,
    putReserva_Items
  };