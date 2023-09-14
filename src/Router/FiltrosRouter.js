const { Router } = require("express");
const { getReserva_FiltrosHandler, getReservaPorUsuario_FiltrosHandler, getReviewsPorUsuario_FiltrosHandler } = require("../Handlers/FiltrosHandler");


const filtrosRouter = Router();

// http://localhost:3001/hotel/filtros/reservaPorUsuario/:UsuarioId

//Filtro de los tipos de habitaciones disponibles 
filtrosRouter.post("/", getReserva_FiltrosHandler);

filtrosRouter.get("/reservaPorUsuario/:UsuarioId", getReservaPorUsuario_FiltrosHandler);

filtrosRouter.get(
  "/reviewPorUsuario/:UsuarioId",
  getReviewsPorUsuario_FiltrosHandler
);

module.exports = filtrosRouter;
