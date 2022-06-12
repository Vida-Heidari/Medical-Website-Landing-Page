const menu = document.querySelector(".nav");
const menuOpenBtn = document.querySelector(".open-btn");
const menuCloseBtn = document.querySelector(".close-btn");

// ----------------- Menu --------------
menuOpenBtn.addEventListener("click", () => {
  console.log("menu clicked");
  menu.classList.toggle("menu--open");
  menu.style.transition = "300ms ease-in-out";
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu--open");
  menu.style.transition = "none";
});
