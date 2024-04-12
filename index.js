import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const swiper = new Swiper("#swiper", {
  autoplay: true,
  slidesPerView: "auto",
  centeredSlides: true,
});
