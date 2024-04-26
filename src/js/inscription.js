import "../scss/inscription.scss";

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

// vérifie si les champs requis sont remplis et que les données saisies sont valides

document.querySelector("form").addEventListener("submit", function (event) {
  var username = document.querySelector("#text1").value;
  var email = document.querySelector("#text2").value;
  var mobile = document.querySelector("#text3").value;
  var password = document.querySelector("#text4").value;
  var confirmPassword = document.querySelector("#text5").value;

  if (!username || !email || !mobile || !password || !confirmPassword) {
    alert("Veuillez remplir tous les champs.");
    event.preventDefault();
  } else if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    event.preventDefault();
  }
});

// Masquage du mot de passe
document.querySelectorAll('input[type="password"]').forEach(function (input) {
  input.addEventListener("focus", function () {
    this.type = "text";
  });

  input.addEventListener("blur", function () {
    this.type = "password";
  });
});

// Feedback visuel

document.querySelector("form").addEventListener("submit", function () {
  document.querySelector(".btn-success").disabled = true;
  document.querySelector(".btn-success").value = "Chargement...";
});
