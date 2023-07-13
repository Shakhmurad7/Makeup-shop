const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-container-right");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
