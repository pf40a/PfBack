const Reviews = require("../Models/Reviews");
const Usuarios = require("../Models/Usuarios");


// GET ALL REVIEWS
const getReviews = async () => {
  const findReviews = await Reviews.findAll({
    include: [
      {
        model: Usuarios,
        // as: "user",
        attributes: ["nombre", "apellido", "email"],
      },
    ],
  });
  if (!findReviews || !findReviews.length)
    return { error: "No hay Reviews" };
  return { data: findReviews };
};

//GET REVIEWS BY USER
const getReviewsByUser = async (id) => {
  const findReviews = await Reviews.findOne({
    where: {
    UsuarioId: id,
    },
  });
  if (!findReviews)
    
    return { error: "Reviews no existe con el Usuario: " + id };
  
  return { data: findReviews };
};

//GET REVIEWS BY ID
const getReviewsById = async (id) => {
  const findReviews = await Reviews.findOne({
    where: {
    id: id,
    },
  });
  if (!findReviews) return { error: "Reviews no existe" };
  
  return { data: findReviews };
};

//POST - CREA UN NUEVO REVIEW
const postReview = async (UsuarioId, rating, comentario) => {
  /* const validateEmail = await Reviews.findAndCountAll({ where: { UsuarioId } });
  ;
  if (validateEmail.count > 0) return { error: "Usuario ya realizó una Review" }; */

  const nuevaReview = await Reviews.create({
    UsuarioId,
    rating,
    comentario,
  });

  return { data: nuevaReview, msg: "Review creado" };
}

//ELIMINAR FISICAMENTE UNA REVIEW
const deleteReview = async (id) => {
   const review = await Reviews.findByPk(id);
  if (!review) return { error: "Review no existe" };
  
  const reviewEliminado = await Reviews.destroy({
    where: {
    id: id,
    },
  });
  if (!reviewEliminado) return { error: "Review no existe" };
  
  return { data: review, msg: "Review Eliminado" };
};

//ELIMINAR LOGICAMENTE UNA REVIEW
const disableReview= async (id) => {
  const findReview = await Reviews.findOne({
    where: {
    id: id,
    },
  });
  if (!findReview) return { error: "Review no existe" };
  await findReview.update({deleted: true})
  await findReview.save()
  return { data: findReview, msg: "Review Desactivado" };
};

// MODIFICAR UNA REVIEW
const putReview = async (id, rating, comentario, deleted) => {
  const findReview = await Reviews.findByPk(id);
  if (!findReview) return { error: "Review no existe" };

  if (rating) findReview.rating = rating;
  if (comentario) findReview.comentario = comentario;
  if (deleted === true) {
     findReview.deleted = true;
  } else {
     findReview.deleted = false;
  }
  await findReview.save();

  if (!findReview) return { error: "No se guardó los cambios" };
  return { data: findReview, msg: "Review actualizado" };
};

module.exports = {
  getReviews,
  getReviewsByUser,
  getReviewsById,
  postReview,
  deleteReview,
  disableReview,
  putReview,
};
