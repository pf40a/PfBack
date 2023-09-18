require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const sequelize = require("./db");
const router = require("./Router/mainRouter");
const port = 3001;
const app = express();
const { PORT } = process.env;
const { Usuarios, Reviews, Reservas } = require("./Models/Relations");

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

// MAIN ROUTER
app.use("/hotel", router);

// SEQUELIZE - alter:true // force:false
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server on PORT :" + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});
