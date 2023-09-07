const { Router } = require("express");
const { postCarritoHandler, getCarritoHandler, getCarritoByIdHandler, deleteCarritoHandler, putCarritoHandler } = require("../Handlers/carritoHandler");

const carritoRouter = Router();

// http://localhost:3001/hotel/carrito

carritoRouter.get("/", getCarritoHandler);
carritoRouter.get("/:UsuarioId", getCarritoByIdHandler);
carritoRouter.delete("/:UsuarioId", deleteCarritoHandler);
carritoRouter.post("/", postCarritoHandler);
carritoRouter.put("/:id", putCarritoHandler);

module.exports = carritoRouter;
