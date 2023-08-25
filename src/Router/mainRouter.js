const { Router } = require("express");
const userRouter = require("./userRouter");
const clientesRouter = require("./clientesRouter");
const habitacion_DetallesRouter = require("./habitacion_DetallesRouter");
const habitacionesRouter = require("./habitacionesRouter");
const reservasRouter = require("./reservasRouter");
const reserva_ItemsRouter = require("./reservas_ItemsRouter");
const reviewsRouter = require("./reviewsRouter");

const router = Router();

router.use("/users", userRouter);  // http://localhost:3001/hotel/users
router.use("/clientes", clientesRouter);  // http://localhost:3001/hotel/clientes
router.use("/habitaciones/detalle", habitacion_DetallesRouter);
router.use("/habitaciones", habitacionesRouter);
router.use("/reservas", reservasRouter);
router.use("/reservas/items", reserva_ItemsRouter)
router.use("/reviews", reviewsRouter)

module.exports = router;
