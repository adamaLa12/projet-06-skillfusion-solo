// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import Alert from "bootstrap/js/dist/alert";

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from "bootstrap";

// Sélectionne les éléments du carrousel
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

let currentIndex = 0;

// Fonction pour afficher la diapositive suivante
function nextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

// Fonction pour afficher la diapositive précédente
function prevSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}

// Écouteurs d'événements pour les boutons précédent et suivant
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

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
