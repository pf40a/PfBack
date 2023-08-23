require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./db");
const router = require("./Router/mainRouter");
//const { Usuarios } = require("./Models/Relations");
//const port = process.env.PORT || 3001;
const port = 3001
const app = express();

const { Usuarios, Reviews, Reservas } = require("./Models/Relations")
//Usuario

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// MAIN ROUTER
app.use("/hotel", router);

// SEQUELIZE - alter:true // force:false
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log("Server on PORT :" + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
 // console.error(err);
  res.status(status).send(message);
});
