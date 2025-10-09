const burger = document.querySelector(".burger");

const nav = document.querySelector("nav");

const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");

  nav.classList.toggle("active");
}

menu.addEventListener("click", menuClick);

function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

ocument.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    // Skjuler alle slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Viser det aktuelle slide
    slides[slideIndex].style.display = "block";
  }

  // Skift slide når man klikker på pile
  window.changeSlide = function (n) {
    showSlide(slideIndex + n);
  };

  // Start slideshowet
  showSlide(slideIndex);
});
