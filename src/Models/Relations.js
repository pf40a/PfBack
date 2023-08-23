const Clientes = require("./Clientes");
const Habitacion_Detalle = require("./Habitacion_Detalles");
const Habitaciones = require("./Habitaciones");
const Reserva_Items = require("./Reserva_Items");
const Reservas = require("./Reservas");
const Reviews = require("./Reviews");
const Usuarios = require("./Usuarios");

// REVIEWS RELATIONS
Reviews.belongsTo(Usuarios);

//RESERVAS RELATIONS
Reservas.belongsTo(Usuarios);
Reservas.belongsTo(Clientes);

//RESERVA_ITEM RELATIONS
Reserva_Items.belongsTo(Reservas);
//Reserva_Items.belongsTo(Habitaciones)
Reserva_Items.belongsTo(Habitaciones, {
  //foreignKey: "HabitacioneId",
  as: "Habitacion",
});
//HABITACIONES RELATIONS
Habitaciones.belongsTo(Habitacion_Detalle);

module.exports = {
  Usuarios,
  Reviews,
  Reservas,
  Reserva_Items,
  Clientes,
  Habitaciones,
  Habitacion_Detalle,
};