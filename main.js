"use strict!";
// Mobile Nav
const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
// eventLisrener for  Mobile Nav
let navTimeout = () => setTimeout(removeMobileNav, 400);
hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("animate-makeNavSmaller");
});
hamburgerMenu.addEventListener("click", navTimeout);

// Navigation function
function removeMobileNav() {
  hamburgerMenu.classList.toggle("open");
  menu.classList.toggle("animate-makeNavSmaller");

  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  if (hamburgerMenu.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
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
