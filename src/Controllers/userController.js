const { auth } = require("../Firebase/Config");
const Reviews = require("../Models/Reviews");
const Usuarios = require("../Models/Usuarios");
const bcrypt = require("bcrypt");

// GET ALL USUARIOS
const getUsuarios = async () => {
  const findUsuarios = await Usuarios.findAll();
  if (!findUsuarios || !findUsuarios.length)
    return { error: "No hay Usuarios" };
  return { data: findUsuarios };
};

//GET USUARIO AL HACER LOGIN
const getUserLogin = async (email, password) => {
  const findUserByEmail = await Usuarios.findOne({
    where: { email: email, deleted: false },
  });
  if (!findUserByEmail) return { error: "Email incorrecto" };
  const passwordMatch = await bcrypt.compare(
    password,
    findUserByEmail.password
  );

  if (passwordMatch) {
    return { data: findUserByEmail, msg: "Usuario logeado" };
  } else {
    return { error: "Password incorrecto" };
  }
};

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
const postUser = async ( id, nombre, apellido, email, password, googleUser, admin ) => {

  const validateEmail = await Usuarios.findAndCountAll({ where: { email } });

  if (validateEmail.count > 0) return { error: "Email Repetido" };

  // Genera el hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  const nuevoUser = await Usuarios.create({
    id: id || "",
    nombre: nombre || "",
    apellido: apellido || "",
    email,
    password: hashedPassword,
    googleUser: googleUser || false,
    admin,
  });

  return { data: nuevoUser, msg: "Usuario creado" };
};

// ELIMINA FISICAMENTE UN USUARIO
const deleteUser = async (id) => {
  // Eliminando de Firebase

  auth
    .deleteUser(id)
    .then(() => {
      console.log("Usuario eliminado con éxito.");
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });

  // Eliminando de la BD local

  const user = await Usuarios.findByPk(id);
  if (!user) return { error: "Usuario no existe" };

  const userEliminado = await Usuarios.destroy({
    where: {
      id: id,
    },
  });
  if (!userEliminado) return { error: "Usuario no existe" };
  //ELIMINA las Reviews del USUARIO ELIMINADO
  await Reviews.destroy({
    where: {
      UsuarioId: null,
    },
  });
  return { data: user, msg: "Usuario Eliminado" };
};

//ELIMINA LOGICAMENTE UN USUARIO
const disableUser = async (id) => {
  const findUser = await Usuarios.findOne({
    where: {
      id: id,
    },
  });
  if (!findUser) return { error: "Usuario no existe" };
  await findUser.update({ deleted: true });
  await findUser.save();
  return { data: findUser, msg: "Usuario Desactivado" };
};

// MODIFICAR UN USUARIO
const putUser = async ( id, nombre, apellido, email, password, admin, deleted ) => {
  // -------- Modificando un usuario de Firebase --------

  // Datos normales

  // Objeto para almacenar las actualizaciones que deseas aplicar
  const updates = {};

  // Verificar si 'nombre' y 'apellido' están definidos y no son nulos
  updates.displayName =
    (nombre !== null &&
    nombre !== undefined &&
    apellido !== null &&
    apellido !== undefined)
      ? `${nombre} ${apellido}`
      : nombre !== null && nombre !== undefined
      ? nombre
      : apellido !== null && apellido !== undefined
      ? apellido
      : updates.displayName;

  // Verificar si 'email' está definido y no es nulo
  updates.email = (email !== null && email !== undefined) ? email : updates.email;

  // Aplicar las actualizaciones solo si hay cambios que hacer

  if (Object.keys(updates).length > 0) {
    auth.updateUser(id, updates)
    .then((userRecord) => {
      console.log("Usuario actualizado con éxito:", userRecord.toJSON());
    })
    .catch((error) => {
      console.error("Error al actualizar el usuario:", error);
    });
  }
  
  // Cambiando la contraseña del usuario

  // if (password) {
  //   // Envía un enlace de restablecimiento de contraseña al correo electrónico del usuario
  //   auth.generatePasswordResetLink(email)
  //   .then((link) => {
  //     console.log('Enlace de restablecimiento de contraseña enviado:', link);
  //   })
  //   .catch((error) => {
  //     console.error('Error al enviar el enlace de restablecimiento de contraseña:', error);
  //   });
  // }

  // Modificando un usuario de la BD local

  const findUser = await Usuarios.findByPk(id);
  if (!findUser) return { error: "Usuario no existe" };

  if (nombre) findUser.nombre = nombre;
  if (apellido) findUser.apellido = apellido;
  if (email) findUser.email = email;
  if (password) findUser.password = password;

  if (admin === true) {
    findUser.admin = true;
  } else {
    findUser.admin = false;
  }
  if (deleted === true) {
    findUser.deleted = true;
  } else {
    findUser.deleted = false;
  }
  await findUser.save();

  if (!findUser) return { error: "No se guardó los cambios" };
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
