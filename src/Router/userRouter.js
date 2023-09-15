const { Router } = require("express");
const {
  getUsuariosHandler,
  postUserHandler,
  getUserLoginHandler,
  deleteUserHandler,
  disableUserHandler,
  putUserHandler,
  getUserByIdHandler,
} = require("../Handlers/userHandler");

const userRouter = Router();

// http://localhost:3001/hotel/users/disable/:id

userRouter.get("/", getUsuariosHandler);
userRouter.post("/login", getUserLoginHandler);
userRouter.get("/:id", getUserByIdHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.delete("/disable/:id", disableUserHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/:id", putUserHandler);

module.exports = userRouter;
