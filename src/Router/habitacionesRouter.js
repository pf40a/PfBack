const { Router } = require("express");
const postAllHabitaciones = require("../Utils/postAllDatosHabitaciones");

const habitacionesRouter = Router();

// http://localhost:3001/hotel/habitaciones

// habitacionesRouter.get("/", getHabitacionesHandler)
// habitacionesRouter.get("/:id", getHabitacionesByIdHandler);
// habitacionesRouter.delete("/:id", deleteHabitacionesHandler);
// habitacionesRouter.post("/", postHabitacionesHandler);
// habitacionesRouter.put("/:id", putHabitacionesHandler);

//para cargar datos a la BD
habitacionesRouter.post("/alldatos", postAllHabitaciones )

module.exports = habitacionesRouter;
