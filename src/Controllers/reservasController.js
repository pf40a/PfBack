const Reservas = require("../Models/Reservas")
//const Usuarios = require("../Models/Usuarios")
//const { Op } = require("sequelize")

// GET ALL RESERVAS
const getReservas = async () => {
    const findReservas = await Reservas.findAll()
    if (findReservas == 0) return { error: "No hay reservas"}
    return { data: findReservas}
}

//GET RESERVA BY ID
const getReservasById = async (id) => {
    const findReserva = await Reservas.findByPk(id)

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
const postReservas = async ( fechaIngreso, fechaSalida, adultos, ninos, pago_Estado, UsuarioId, ClienteId ) => {
    //HACER UN VALIDAR DE LAS FECHAS

    const nuevaReserva = await Reservas.create({
        fechaIngreso, 
        fechaSalida, 
        adultos, 
        ninos, 
        pago_Estado,
        UsuarioId,
        ClienteId 
    });

    //await nuevaReserva.setUsuarios(UsuarioId)

    return { data: nuevaReserva, msg: "Reserva creada"};
}

//ACTUALIZAR UNA RESERVA
const putReservas = async (id, fechaIngreso, fechaSalida, adultos, ninos) => {
    const findReserva = await Reservas.findByPk(id)
    if (!findReserva) return { error: "Esta Reserva no existe"}

    if(fechaIngreso) findReserva.fechaIngreso = fechaIngreso
    if(fechaSalida) findReserva.fechaSalida = fechaSalida
    if(adultos) findReserva.adultos = adultos
    if(ninos) findReserva.ninos = ninos

    //
    //

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