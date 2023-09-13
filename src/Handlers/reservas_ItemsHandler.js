

const { getReserva_Items, getReserva_ItemsById, deleteReserva_Items, disableReserva_Items, postReserva_Items, putReserva_Items } = require("../Controllers/reservas_ItemsController");

// Ruta para traer las Reservas Items
const getReserva_ItemsHandler = async (req, res) => {
 // return res.status(200).send("get Reserva Items");
  
    try {
        const resultado = await getReserva_Items()
        if (resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

//Ruta para buscar Reserva Item por id
const getReserva_ItemsByIdHandler = async (req, res) => {
  // return res.status(200).send("get Reserva Items By ID");
    try {
        const { id } = req.params
        const resultado = await getReserva_ItemsById(id)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

//Ruta para borrar una Reserva Item
const deleteReserva_ItemsHandler = async (req, res) => {
    try {
        const { id } = req.params
        const resultado = await deleteReserva_Items(id)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

//Ruta para hacer un disable a una Reserva Item
const disableReserva_ItemsHandler = async (req, res) => {
    try {
        const { id } = req.params
        const resultado = await disableReserva_Items(id)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

//Ruta para crear una Reserva Item
const postReserva_ItemsHandler = async (req, res) => {
    try {
        const { precio, cantidad, HabitacionId, ReservaId } = req.body
        const resultado = await postReserva_Items(precio, cantidad, HabitacionId, ReservaId)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

//Ruta para modificar Reserva Item
const putReserva_ItemsHandler = async (req, res) => {
    try {
        const { id } = req.params
        const { precio, cantidad, HabitacionId } = req.body //Ver si tambien poder cambiar habitacionId y reservasId
        const resultado = await putReserva_Items(id, precio, cantidad, HabitacionId)

        if(resultado.error) return res.status(400).json(resultado)
        return res.status(200).json(resultado)

    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

module.exports = {
    getReserva_ItemsHandler,
    getReserva_ItemsByIdHandler,
    deleteReserva_ItemsHandler,
    disableReserva_ItemsHandler,
    postReserva_ItemsHandler,
    putReserva_ItemsHandler
  };