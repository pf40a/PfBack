const { Router } = require("express");
const getReserva_FiltrosHandler = require("../Handlers/reservas_FiltrosHandler");


const filtrosRouter = Router();

// http://localhost:3001/hotel/filtros

//GET de SutTipo - Para el Home del FRONT
filtrosRouter.get("/", getReserva_FiltrosHandler);

module.exports = filtrosRouter;
