const { Sequelize } = require("sequelize");
const config = require("./config/config.json")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connexion établie avec succès."))
  .catch((error) =>
    console.error("Impossible de se connecter à la base de données:", error)
  );
