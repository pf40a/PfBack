const { Router } = require("express");
const getSubTipoHandler = require("../Handlers/subTipoHander");

const subTipoRouter = Router();

// http://localhost:3001/hotel/subTipo

//GET de SutTipo - Para el Home del FRONT
subTipoRouter.get("/", getSubTipoHandler);

module.exports = subTipoRouter;
