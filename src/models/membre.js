module.exports = (sequelize, DataTypes) => {
  const Membre = sequelize.define("Membre", {
    idMembre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dateInscription: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    motDePasse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Membre.associate = (models) => {
    Membre.hasMany(models.Question, { foreignKey: "idMembre" });
  };
  tableName: "Membre";
  return Membre;
};
