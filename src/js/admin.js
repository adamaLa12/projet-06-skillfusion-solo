import "../scss/admin.scss";
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// vérifie que les champs requis sont remplis et que les données saisies sont valides. Cela permet
//de réduire le nombre de requêtes inutiles au serveur et d'améliorer l'expérience utilisateur en fournissant
//des messages d'erreur immédiats.
document.querySelector("form").addEventListener("submit", function (event) {
  var kadi = document.querySelector('input[name="kadi"]').value;
  var sifre = document.querySelector('input[name="sifre"]').value;

  if (!kadi || !sifre) {
    alert("Veuillez remplir tous les champs.");
    event.preventDefault();
  }
});

//masque le mot de passe saisi par l'utilisateur, ce qui améliore la sécurité et la confidentialité.

document
  .querySelector('input[type="password"]')
  .addEventListener("focus", function () {
    this.type = "text";
  });

// Masquage du mot de passe :
// pour masquer le mot de passe saisi par l'utilisateur, ce qui améliore la sécurité et la confidentialité.
document
  .querySelector('input[type="password"]')
  .addEventListener("blur", function () {
    this.type = "password";
  });

//Feedback visuel : lors de la soumission du formulaire, un spinner ou un message de chargement pendant que la requête est en cours sera affiché.
document.querySelector("form").addEventListener("submit", function () {
  document.querySelector(".butonlogin").disabled = true;
  document.querySelector(".butonlogin").value = "Chargement...";
});
