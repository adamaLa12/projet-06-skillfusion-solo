require("dotenv").config({ path: ".env.production" });

const { log } = require("console");
const express = require("express");

const { user, Question, Membre, Cours } = require("../models");

const inscriptionController = require("./controllers/inscriptionController");
const indexController = require("./controllers/indexController");
const adminController = require("./controllers/adminController");
const contactController = require("./controllers/contactController");
const connexionController = require("./controllers/connexionController");
const coursController = require("./controllers/coursController");
const path = require("path");
const app = express();
const PORT = 3001;

app.get("/", indexController.index);
app.get("/admin", adminController.admin);
app.get("/contact", contactController.contact);
app.get("/connexion", connexionController.connexion);
app.get("/inscription", inscriptionController.inscription);
app.get("/cours", coursController.cours);
// Définir le moteur de rendu pour les vues

app.set("view engine", "ejs");

// Définir le répertoire des vues
app.set("views", __dirname + "/views");
console.log("567");

// Définissez vos routes et middleware ici...
// Middleware pour servir les fichiers statiques depuis le répertoire "dist"
app.use(express.static("dist"));

/* // Route pour la page d'accueil
app.get("/", (req, res) => {
  res.render("index");
  //   res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Route pour la page d'administration
app.get("/admin", (req, res) => {
  //res.sendFile(path.join(__dirname, "dist", "admin.html"));
  res.render("admin");
});

app.get("/connexion", (req, res) => {
  //res.sendFile(path.join(__dirname, "dist", "connexion.html"));
});

app.get("/contact", (req, res) => {
  //res.sendFile(path.join(__dirname, "dist", "contact.html"));
});

app.get("/cours", (req, res) => {
  res.render("cours");
  //res.sendFile(path.join(__dirname, "dist", "cours.html"));
});

app.get("/inscription", (req, res) => {
  res.render("inscription");
  // res.sendFile(path.join(__dirname, "dist", "inscription.html"));
}); */

// Middleware pour gérer les erreurs 404 (page non trouvée)
/* app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "dist", "404.html"));
}); */

// Middleware pour gérer les erreurs 500 (erreur interne du serveur)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
// Démarrez le serveur Express en écoutant sur le port 3001
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port http://localhost:${PORT}`);
});
