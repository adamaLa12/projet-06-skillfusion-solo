module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    idUser: {
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
    motDePasse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return user;
};
