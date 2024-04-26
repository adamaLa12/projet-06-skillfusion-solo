const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
console.log("567");
// Définissez vos routes et middleware ici...
// Middleware pour servir les fichiers statiques depuis le répertoire "dist"
app.use(express.static("dist"));

// Route pour la page d'accueil
app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Route pour la page d'administration
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "admin.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "connexion.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "contact.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "cours.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "inscription.html"));
});

// Ajoutez d'autres routes pour les autres pages...

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
