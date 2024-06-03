/* const Sequelize = require("sequelize");
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

module.exports = {
  development: {
    username: "skill",
    password: "skill",
    database: "skill",
    host: "localhost",
    dialect: "postgres",
  },
  // Ajoutez d'autres environnements si nécessaire
};

const dbConfig = require("./db"); // Assurez-vous que le chemin d'accès est correct
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

sequelize
  .authenticate()
  .then(() => console.log("Connexion établie avec succès."))
  .catch((err) =>
    console.error("Impossible de se connecter à la base de données:", err)
  );
const Sequelize = require("sequelize");

export default sequelize;
const Sequelize = require('sequelize');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Exportez sequelize pour l'utiliser dans d'autres parties de votre application
module.exports = sequelize;
 */
const Sequelize = require("sequelize");
const config = require("./config/config.json")[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Exportez sequelize pour l'utiliser dans d'autres parties de votre application
module.exports = sequelize;
