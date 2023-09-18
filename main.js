const navHamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-menu");
const navCtas = document.querySelector(".nav-ctas");

navHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navCtas.classList.toggle("hidden");
});
