const { Router } = require("express");
const { getReserva_ItemsHandler, getReserva_ItemsByIdHandler, deleteReserva_ItemsHandler, disableReserva_ItemsHandler, postReserva_ItemsHandler, putReserva_ItemsHandler } = require("../Handlers/reservas_ItemsHandler");

const reserva_ItemsRouter = Router();

// http://localhost:3001/hotel/reservasItems




reserva_ItemsRouter.get("/", getReserva_ItemsHandler);
reserva_ItemsRouter.get("/:id", getReserva_ItemsByIdHandler);
reserva_ItemsRouter.delete("/:id", deleteReserva_ItemsHandler);
reserva_ItemsRouter.delete("/disable/:id", disableReserva_ItemsHandler);
reserva_ItemsRouter.post("/", postReserva_ItemsHandler);
reserva_ItemsRouter.put("/:id", putReserva_ItemsHandler);

module.exports = reserva_ItemsRouter;
