const { Router } = require("express");

// Importando de los Handlers
const { createPreferenceHandler, feedBackHandler } = require("../Handlers/mercadoPagoHandler");

const mercadoPagoRouter = Router();

// http://localhost:3001/hotel/mercadoPago

mercadoPagoRouter.post("/create_preference", createPreferenceHandler);
mercadoPagoRouter.get("/feedback", feedBackHandler)


module.exports = mercadoPagoRouter;