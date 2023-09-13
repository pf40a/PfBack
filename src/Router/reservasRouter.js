const { Router } = require("express");
const { getReservasHandler, getReservasByIdHandler, deleteReservasHandler, disableReservasHandler, postReservasHandler, putReservasHandler } = require("../Handlers/reservasHandler");


const reservasRouter = Router();

// http://localhost:3001/hotel/reservas/disable

reservasRouter.get("/", getReservasHandler)
reservasRouter.get("/:id", getReservasByIdHandler);
reservasRouter.delete("/:id", deleteReservasHandler);
reservasRouter.delete("/disable/:id", disableReservasHandler);
reservasRouter.post("/", postReservasHandler);
reservasRouter.put("/:id", putReservasHandler);

module.exports = reservasRouter;
