"use strict!";
// Mobile Nav
const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const body = document.body;
// eventLisrener for  Mobile Nav
let navTimeout = () => setTimeout(toggleMobileNav, 400);
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("animate-makeNavBigger");
});
hamburgerMenu.addEventListener("click", navTimeout);

// Navigation function
function toggleMobileNav() {
  const isMenuOpen = hamburgerMenu.classList.contains("open");

  // Toggle hamburger button and menu visibility
  hamburgerMenu.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// testimonial carousel
const testimonialCards = document.querySelectorAll("#testimonial-card");
const carouselBtns = document.querySelectorAll("#carousel-btn");

carouselBtns.forEach((el, index) => {
  el.addEventListener("click", () => {
    // remove the background color from all buttons
    carouselBtns.forEach((el) => {
      el.classList.remove("bg-brightRed");
    });
    // applying the background  color to the clicked button
    el.classList.add("bg-brightRed");
    //  settin All Cards to hidden
    testimonialCards.forEach((el) => {
      el.classList.remove("flex");
      el.classList.add("hidden");
    });
    // dispalaying the card with the index of the clicked button
    testimonialCards[index].classList.remove("hidden");
    testimonialCards[index].classList.add("flex");
  });
});
