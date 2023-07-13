const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-container-right");
const select = document.querySelector(".select");
const selectUl = document.querySelector(".select-ul");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});

selectUl.addEventListener("click", function () {
  select.classList.toggle("open");
});
