const { getReservas, getReservasById, deleteReservas, disableReservas, postReservas, putReservas} = require("../Controllers/reservasController")

// Ruta para traer todas las Reservas
const getReservasHandler = async (req,res) => {
    try {
        const resultado = await getReservas()

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

// Ruta para buscar una Reserva por ID
const getReservasByIdHandler = async (req,res) => {
    try {
        const { id } = req.params
        const resultado = await getReservasById(id) 

        if (resultado.error) return res.status(400).json(resultado);
        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

// Ruta para borrar una Reserva
const deleteReservasHandler = async (req,res) => {
    try {
        const { id } = req.params
        const resultado = await deleteReservas(id)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

//Ruta para disable Reserva 
const disableReservasHandler = async (req,res) => {
    try {
        const { id } = req.params
        const resultado = await disableReservas(id)

        if (resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

//Ruta para crear una nueva Reserva
const postReservasHandler = async (req,res) => {
    try {
        const { fechaIngreso, fechaSalida, adultos, ninos, pago_Estado, UsuarioId, ClienteDocIdentidad  } = req.body
        const resultado = await postReservas( fechaIngreso, fechaSalida, adultos, ninos, pago_Estado, UsuarioId, ClienteDocIdentidad  )

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

//Ruta para actualizar una Reserva
const putReservasHandler = async (req,res) => {
    try {
        const { id } = req.params
        const { fechaIngreso, fechaSalida, adultos, ninos, deleted, pago_Estado } = req.body
        const resultado = await putReservas( id, fechaIngreso, fechaSalida, adultos, ninos, deleted, pago_Estado)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
}

module.exports = { 
  getReservasHandler, 
    getReservasByIdHandler, 
    deleteReservasHandler, 
    disableReservasHandler, 
    postReservasHandler, 
    putReservasHandler
}