const { Router } = require("express");
const { getImagenHandler, postImagenHandler } = require("../Handlers/imagenesHandler");

const imagenRouter = Router();

// http://localhost:3001/hotel/imagen

imagenRouter.get("/:fileName", getImagenHandler);
imagenRouter.post("/", postImagenHandler);

module.exports = imagenRouter;
