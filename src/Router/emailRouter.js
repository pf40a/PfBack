const { Router } = require("express");

// Importando de los Handlers
const { emailHandler } = require("../Handlers/emailHandler.js");

const emailRouter = Router();

// http://localhost:3001/hotel/email

emailRouter.post("/", emailHandler);


module.exports = emailRouter;

