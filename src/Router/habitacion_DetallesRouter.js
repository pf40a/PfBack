const { Router } = require("express");

// Importación de los Handlers
const {
  getHabitacionDetallesHandler,
  getHabitacionDetallesByIdHandler,
  deleteHabitacionDetallesHandler,
  putHabitacionDetallesHandler,
  postHabitacionDetallesHandler,
} = require("../Handlers/habitacion_DetallesHandler.js");

const habitacion_DetallesRouter = Router();

// http://localhost:3001/hotel/habitacion/detalle

habitacion_DetallesRouter.get("/", getHabitacionDetallesHandler);
habitacion_DetallesRouter.get("/:id", getHabitacionDetallesByIdHandler);
habitacion_DetallesRouter.delete("/delete/:id", deleteHabitacionDetallesHandler);
habitacion_DetallesRouter.put("/put/:id", putHabitacionDetallesHandler);
habitacion_DetallesRouter.post("/post", postHabitacionDetallesHandler);

module.exports = habitacion_DetallesRouter;
