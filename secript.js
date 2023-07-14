const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-container-right");
const select = document.querySelector(".select");
const selectUl = document.querySelector(".select-ul");
const angleUP = document.querySelector(".angle-up");
const angleDOWN = document.querySelector(".angle-down");
const menuclose = document.querySelector(".menu-close");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
menuclose.addEventListener("click", function () {
  nav.classList.toggle("active");
});
select.addEventListener("click", function () {
  select.classList.toggle("open");
  angleUP.classList.toggle("angle-up-none");
  angleDOWN.classList.toggle("angle-down-inline");
});
