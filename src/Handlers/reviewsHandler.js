const { deleteReview, disableReview, getReviews, getReviewsById, postReview, putReview } = require("../Controllers/reviewsController")

// Ruta para traer a todos los Reviews
const getReviewsHandler = async (req, res, next) => {
  try {
    const resultado = await getReviews();
    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json(error);
  }
};


//Ruta para buscar un Reviews por Id
const getReviewByIdHandler = async(req, res) =>{

  try {
    const {id} = req.params
    const resultado = await getReviewsById(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para Crear una Nueva Review
const postReviewHandler = async(req, res) =>{
//return res.status(200).send("Crear un User")
  try {
    const { UsuarioId, rating, comentario } = req.body;
    const resultado = await postReview(UsuarioId, rating, comentario);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para hacer un DELETE a una Review
const deleteReviewHandler = async(req, res) =>{
  try {
    const {id} = req.params
    const resultado = await deleteReview(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta para hacer un DESABLE a una Review
const disableReviewHandler = async(req, res) =>{
  try {
    const {id} = req.params
    const resultado = await disableReview(id);

    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Ruta PUT - ACTUALIZAR una Review
const putReviewHandler = async(req, res) =>{
  try {
    const { id } = req.params
    const { rating, comentario, deleted} = req.body;
    const resultado = await putReview(id, rating, comentario, deleted);
    
    if (resultado.error) return res.status(400).json(resultado);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getReviewsHandler,
  getReviewByIdHandler,
  postReviewHandler,
  deleteReviewHandler,
  disableReviewHandler,
  putReviewHandler,
};


