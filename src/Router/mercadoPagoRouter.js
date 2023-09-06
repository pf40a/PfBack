const { Router } = require("express");

// Importando de los Handlers
const { createPreferenceHandler, feedBackHandler, webhookHandler } = require("../Handlers/mercadoPagoHandler");

const mercadoPagoRouter = Router();

// http://localhost:3001/hotel/mercadoPago

mercadoPagoRouter.post("/create_preference", createPreferenceHandler);
mercadoPagoRouter.get("/feedback", feedBackHandler)
mercadoPagoRouter.post("/webhook", webhookHandler)


module.exports = mercadoPagoRouter;