const { Router } = require("express");
const userRouter = require("./userRouter");
const clientesRouter = require("./clientesRouter");
const habitacion_DetallesRouter = require("./habitacion_DetallesRouter");
const habitacionesRouter = require("./habitacionesRouter");
const reservasRouter = require("./reservasRouter");
const reviewsRouter = require("./reviewsRouter");
const reserva_ItemsRouter = require("./reservas_ItemsRouter");
const subTipoRouter = require("./subTipoRouter");
const filtrosRouter = require("./FiltrosRouter");
const emailRouter = require("./emailRouter");
const mercadoPagoRouter = require("./mercadoPagoRouter");
const carritoRouter = require("./carritoRouter");
const imagenRouter = require("./imagenRouter");

const router = Router();

router.use("/users", userRouter);  // http://localhost:3001/hotel/users
router.use("/clientes", clientesRouter);  // http://localhost:3001/hotel/clientes
router.use("/carrito", carritoRouter);  // http://localhost:3001/hotel/carrito
router.use("/habitaciones/detalle", habitacion_DetallesRouter);
router.use("/habitaciones", habitacionesRouter);
router.use("/reservas", reservasRouter);
router.use("/reservasItems", reserva_ItemsRouter)
router.use("/reviews", reviewsRouter)

router.use("/filtros", filtrosRouter);
router.use("/subtipo", subTipoRouter)
router.use("/imagen", imagenRouter );

router.use("/email", emailRouter)
router.use("/mercadoPago", mercadoPagoRouter)

module.exports = router;
