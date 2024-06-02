const { Membre } = require("./membre"); // Ajustez le chemin d'accès selon votre structure de projet

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    idQuestion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idMembre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    texte: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  Question.associate = (models) => {
    Question.belongsTo(models.Membre, { foreignKey: "idMembre" });
    Question.belongsTo(models.Cours, { foreignKey: "idCours" });
  };

  return Question;
};
