const { getUsuarios, postUser, getUserLogin, deleteUser, disableUser, getUserById, putUser } = require("../Controllers/userController")

// Ruta para traer a todos los Usuarios
const getUsuariosHandler = async (req, res) => {
  try {
    const resultado = await getUsuarios()
    if (resultado.error) return res.status(400).json(resultado)
    return res.status(200).json(resultado)
    
  } catch (error) {
    return res.status(401).json(error)
  }
}

//Ruta para buscar un usuario al hacer LOGIN
const getUserLoginHandler = async(req, res) =>{

  try {
    const {email, password} = req.body
    const resultado = await getUserLogin(email, password);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para buscar un usuario por ID
const getUserByIdHandler = async(req, res) =>{

  try {
    const {id} = req.params
    const resultado = await getUserById(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para Crear un Nuevo Usuario
const postUserHandler = async(req, res) =>{
//return res.status(200).send("Crear un User")
  try {
    const { nombre, apellido, email, password, admin } = req.body
    //return res.status(200).json(req.body);
    const resultado = await postUser(nombre, apellido, email, password, admin);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para ELIMINAR un usuario al hacer LOGIN
const deleteUserHandler = async(req, res) =>{

  try {
    const {id} = req.params
    const resultado = await deleteUser(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para hacer un DESABLE a un user
const disableUserHandler = async(req, res) =>{
  try {
    const {id} = req.params
    const resultado = await disableUser(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta PUT - ACTUALIZAR un user
const putUserHandler = async(req, res) =>{
  try {
    const { id } = req.params
    const {nombre, apellido, password, admin, deleted} = req.body
    const resultado = await putUser(id, nombre, apellido, password, admin, deleted);
    
    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getUsuariosHandler,
  getUserByIdHandler,
  postUserHandler,
  getUserLoginHandler,
  deleteUserHandler,
  disableUserHandler,
  putUserHandler,
};
