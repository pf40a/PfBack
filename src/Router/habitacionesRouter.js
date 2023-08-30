const { Router } = require("express");

// Importando los datos de las habitaciones
const postAllHabitaciones = require("../Utils/postAllDatosHabitaciones.js");

// Importando de los Handlers
const {
  getHabitacionesHandler,
  getHabitacionesByIdHandler,
  deleteHabitacionesHandler,
  putHabitacionesHandler,
  postHabitacionesHandler,
} = require("../Handlers/habitacionesHandler.js");

const habitacionesRouter = Router();

// http://localhost:3001/hotel/habitaciones

habitacionesRouter.get("/", getHabitacionesHandler);
habitacionesRouter.get("/:id", getHabitacionesByIdHandler);
habitacionesRouter.delete("/delete/:id", deleteHabitacionesHandler);
habitacionesRouter.put("/put/:id", putHabitacionesHandler);
habitacionesRouter.post("/post", postHabitacionesHandler);


//para cargar datos a la BD
//http://localhost:3001/hotel/habitaciones/alldatos
habitacionesRouter.post("/alldatos", postAllHabitaciones);

module.exports = habitacionesRouter;
