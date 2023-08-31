const { Router } = require("express");
const getReserva_FiltrosHandler = require("../Handlers/reservas_FiltrosHandler");


const filtrosRouter = Router();

// http://localhost:3001/hotel/filtros

//Filtro de los tipos de habitaciones disponibles 
filtrosRouter.get("/", getReserva_FiltrosHandler);

module.exports = filtrosRouter;
