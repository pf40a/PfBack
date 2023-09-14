const { Router } = require("express");
const { getReviewsHandler, getReviewByIdHandler, deleteReviewHandler, disableReviewHandler, postReviewHandler, putReviewHandler } = require("../Handlers/reviewsHandler");
//const { getReviewsHandler } = require("../Handlers/reviewsHandler");

const reviewsRouter = Router();

// http://localhost:3001/hotel/reviews

 reviewsRouter.get("/", getReviewsHandler)
 reviewsRouter.get("/:id", getReviewByIdHandler);
 reviewsRouter.delete("/:id", deleteReviewHandler);
 reviewsRouter.put("/disable/:id", disableReviewHandler);
 reviewsRouter.post("/", postReviewHandler);
 reviewsRouter.put("/:id", putReviewHandler);

module.exports = reviewsRouter;
