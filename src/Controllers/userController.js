
const Reviews = require("../Models/Reviews");
const Usuarios = require("../Models/Usuarios");

// GET ALL USUARIOS
const getUsuarios = async () => {
  const findUsuarios = await Usuarios.findAll()
  if (!findUsuarios || !findUsuarios.length) return { error: "No hay Usuarios" };
  return { data: findUsuarios };
};


//GET USUARIO AL HACER LOGIN
const getUserLogin = async (email, password) => {
  const findUserByEmail = await Usuarios.findOne({
    where: { email: email, deleted: false },
  });
  if (!findUserByEmail) return { error: "Email incorrecto" };

  if (findUserByEmail?.password === password)
  return { data: findUserByEmail, msg: "Usuario logeado" };
  return { error: "Password Incorrecto" };
}

//GET USUARIO BY ID
const getUserById = async (id) => {
  const findUser = await Usuarios.findOne({
    where: {
    id: id,
    },
  });
  if (!findUser) return { error: "Usuario no existe" };
  
  return { data: findUser };
};

//POST - CREA UN NUEVO USUARIO
const postUser = async (nombre, apellido, email, password, admin) => {
  const validateEmail = await Usuarios.findAndCountAll({ where: { email } });
  ;
  if (validateEmail.count > 0) return { error: "Email Repetido" };

  const nuevoUser = await Usuarios.create({
    nombre,
    apellido,
    email,
    password,
    admin,
  });

  return { data: nuevoUser, msg: "Usuario creado" };
}

// ELIMINA FISICAMENTE UN USUARIO
const deleteUser = async (id) => {
  const user = await Usuarios.findByPk(id)
  if (!user) return { error: "Usuario no existe" };
  
  const userEliminado = await Usuarios.destroy({
    where: {
    id: id,
    },
  });
  if (!userEliminado) return { error: "Usuario no existe" }
  await Reviews.destroy({
    where: {
      UsuarioId: null, 
    },
  });
  return {data: user, msg: "Usuario Eliminado"}
};

//ELIMIN LOGICAMENTE UN USUARIO
const disableUser = async (id) => {
  const findUser = await Usuarios.findOne({
    where: {
    id: id,
    },
  });
  if (!findUser) return { error: "Usuario no existe" };
  await findUser.update({deleted: true})
  await findUser.save()
  return { data: findUser, msg: "Usuario Desactivado" };
};

// MODIFICAR UN USUARIO
const putUser = async (id, nombre, apellido, password, admin) => {
  const findUser = await Usuarios.findByPk(id);
  if (!findUser) return { error: "Usuario no existe" };

  if (nombre) findUser.nombre = nombre;
  if (apellido) findUser.apellido = apellido;
  if (password) findUser.password = password;

  if (admin === true) {
    findUser.admin = true;
  } else {
    findUser.admin = false;
  }
 
  await findUser.save();

  if(!findUser) return {error: "No se guardó los cambios"}
  return { data: findUser, msg: "Usuario actualizado" };
};

module.exports = {
  getUsuarios,
  getUserLogin,
  getUserById,
  postUser,
  deleteUser,
  disableUser,
  putUser,
};