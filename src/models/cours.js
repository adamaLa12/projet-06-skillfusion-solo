const dbConfig = require("./db"); // Ajustez le chemin d'accès selon l'emplacement de votre fichier de configuration Sequelize

module.exports = (sequelize, DataTypes) => {
  const Cours = sequelize.define("Cours", {
    idCours: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catégorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Cours;
};
