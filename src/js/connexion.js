import "../scss/connexion.scss";
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

document.querySelector("form").addEventListener("submit", function (event) {
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  if (!email || !password) {
    alert("Veuillez remplir tous les champs.");
    event.preventDefault();
  }
});

document
  .querySelector('input[type="password"]')
  .addEventListener("focus", function () {
    this.type = "text";
  });

document
  .querySelector('input[type="password"]')
  .addEventListener("blur", function () {
    this.type = "password";
  });

document.querySelector("form").addEventListener("submit", function () {
  document.querySelector(".btn-success").disabled = true;
  document.querySelector(".btn-success").value = "Chargement...";
});

//  redirection form
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "email" && password === "password") {
    window.location.replace("index.html");
  } else {
    // Afficher un message d'erreur sur la page
    document.getElementById("errorMessage").textContent =
      "Veuillez entrer un nom d'utilisateur ou un mot de passe correct!";
  }
}
