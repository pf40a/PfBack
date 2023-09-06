const { Router } = require("express");
const { postClientHandler, getClientByIdHandler, getClientesHandler, deleteClientHandler, disableClientHandler, putClientHandler} = require("../Handlers/clientesHandler")
const clientesRouter = Router();

// http://localhost:3001/hotel/clientes

 clientesRouter.get("/", getClientesHandler)
 clientesRouter.get("/:id", getClientByIdHandler);
 clientesRouter.delete("/:id", deleteClientHandler);
 clientesRouter.delete("/disable/:id", disableClientHandler);
 clientesRouter.post("/", postClientHandler);
 clientesRouter.put("/:id", putClientHandler);

module.exports = clientesRouter;
