const Carrito = require("../Models/Carrito");

// GET ALL CARRITO
const getCarrito = async () => {
    const findCarrito = await Carrito.findAll()
    if (!findCarrito || !findCarrito.length) return { error: "No hay datos en el Carrito" };
    return { data: findCarrito };
};
  
//GET CARRITO POR id DE USUARIO
const getCarritoByIdUsuario = async (id) => {
    const findCarrito = await Carrito.findAll({
      where: {
      UsuarioId: id,
      },
    }); 
    if (!findCarrito) return { error: "No existen datos" };
    
    return { data: findCarrito };
};
  
//POST - CREAR UN NUEVO CARRITO
const postCarrito = async (id, UsuarioId, subTipo, tipo_Habitacion, image, dias, quantityTotal, importe) => {
  
  ;
  const carrito = await Carrito.findOrCreate({
    where: { id },
    defaults: {
      UsuarioId,
      subTipo,
      tipo_Habitacion,
      image,
      dias,
      quantityTotal,
      importe,
    },
  });
  if (!carrito[1]) return { error: "Id ya existente" };
  return { data: carrito, msg: "Carrito creado" };
};

 // ELIMINA FISICAMENTE UN CARRITO - POR ID USUARIO
const deleteCarrito = async (id) => {
  const carritoDeleted = await Carrito.destroy({
    where: {
      UsuarioId: id,
    },
  });
  if (!carritoDeleted) return { error: "Carrito no encontrado" };
 // return(carritoDeleted)
  return { msg: "Carrito eliminado exitosamente" };
};

//ACTUALIZA CARRITO - by ID del carrito
const putCarrito = async (id, UsuarioId, subTipo, tipo_Habitacion,
  image, dias, quantityTotal, importe) => {
  const carrito = await Carrito.findByPk(id)

  if (!carrito) {
    return { error: "Carrito no encontrado" };
  }

  if (UsuarioId) {
    carrito.UsuarioId = UsuarioId;
  }
  if (subTipo) {
    carrito.subTipo = subTipo;
  }
  if (tipo_Habitacion) {
    carrito.tipo_Habitacion = tipo_Habitacion;
  }
  if (image) {
    carrito.image = image;
  }
   if (dias) {
     carrito.dias = dias;
  }
  if (quantityTotal) {
     carrito.quantityTotal = quantityTotal;
  }
  if (importe) {
    carrito.importe = importe;
  }
  await carrito.save();

  return { data: carrito, msg: "Carrito Actualizado" };
};

module.exports = {
  getCarrito,
  getCarritoByIdUsuario,
  postCarrito,
  deleteCarrito,
  putCarrito,
};