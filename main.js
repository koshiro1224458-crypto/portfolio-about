'use strict';

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


const spots = document.querySelectorAll(".spot");
const modals = document.querySelectorAll(".modal");

spots.forEach(spot => {
  spot.addEventListener("click", () => {
    const modalId = spot.dataset.modal;
    document.getElementById(modalId).style.display = "flex";
  });
});

modals.forEach(modal => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll(".spot").forEach(spot => {
  spot.addEventListener("click", () => {
    const modalId = spot.dataset.modal;
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  });
});


document.querySelectorAll(".title-2").forEach(function (title) {
  title.addEventListener("click", function () {
    this.classList.toggle("on");
  });
});



