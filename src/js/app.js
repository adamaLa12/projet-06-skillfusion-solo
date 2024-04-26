/* // app.js
const express = require("express");
const path = require("path");
const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route pour la page d'inscription
app.get("/inscription", (req, res) => {
  res.sendFile(__dirname + "/views/inscription.html");
});

// Route pour la page connexion
app.get("/connexion", (req, res) => {
  res.sendFile(__dirname + "/views/connexion.html");
});

// Route pour la page contact
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

// Route pour la page admin
app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/views/admin.html");
});

// Route pour la page cours
app.get("/cours", (req, res) => {
  res.sendFile(__dirname + "/views/cours.html");
});
// Autres routes...

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
 */
