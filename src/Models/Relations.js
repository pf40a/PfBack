const Carrito = require("./Carrito");
const Clientes = require("./Clientes");
const Habitacion_Detalle = require("./Habitacion_Detalles");
const Habitaciones = require("./Habitaciones");
const Reserva_Items = require("./Reserva_Items");
const Reservas = require("./Reservas");
const Reviews = require("./Reviews");
const SubTipo_Habitaciones = require("./SubTipo_Habitaciones");
const Usuarios = require("./Usuarios");

// REVIEWS RELATIONS
Reviews.belongsTo(Usuarios);

//USUARIOS
Usuarios.hasMany(Reservas);
Usuarios.hasMany(Reviews)

//RESERVAS RELATIONS
Reservas.belongsTo(Usuarios);
Reservas.belongsTo(Clientes);
Reservas.hasMany(Reserva_Items);

//RESERVA_ITEM RELATIONS
Reserva_Items.belongsTo(Reservas);
//Reserva_Items.belongsTo(Habitaciones)
Reserva_Items.belongsTo(Habitaciones, {
  //foreignKey: "HabitacioneId",
  as: "Habitacion",
});

//HABITACIONES RELATIONS
Habitaciones.belongsTo(Habitacion_Detalle);

//CARRITO
Usuarios.hasOne(Carrito);
Carrito.belongsTo(Usuarios);

module.exports = {
  Usuarios,
  Reviews,
  Reservas,
  Reserva_Items,
  Clientes,
  Habitaciones,
  Habitacion_Detalle,
  SubTipo_Habitaciones,
  Carrito,
};
