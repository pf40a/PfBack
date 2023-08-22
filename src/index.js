require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./db");
const router = require("./Router/mainRouter");
const port = process.env.PORT || 3001;
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// MAIN ROUTER
app.use("/pf", router);

// SEQUELIZE - alter:true

sequelize
  .sync({ force: false })
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
  console.error(err);
  res.status(status).send(message);
});
