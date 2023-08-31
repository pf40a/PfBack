  require("dotenv").config();

  const { Sequelize } = require("sequelize");

  const { DB_USER, DB_PASSWORD, DB_HOST, PORT, DB_LOCAL} = process.env;

  const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_LOCAL}`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );

  //:${PORT}
  
  module.exports = sequelize;
