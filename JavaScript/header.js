const navbar = document.querySelector(".navbar");
const navBtn = document.querySelector("#nav-btn");

const header = document.querySelector("#header");
let scrolled = false;

// ----------------- header --------------
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.classList.remove("top");
    if (!scrolled) {
      header.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      header.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    header.classList.add("top");
    scrolled = false;
  }
};

// ----------------- Navbar --------------
navBtn.addEventListener("click", function () {
  navbar.classList.add("navbar__open");
});

navbarClose.addEventListener("click", function () {
  navbar.classList.remove("header__navbar--open");
});

// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     navbar.classList.remove("top");
//     if (!scrolled) {
//       navbar.style.transform = "translateY(-70px)";
//     }
//     setTimeout(function () {
//       navbar.style.transform = "translateY(0)";
//       scrolled = true;
//     }, 200);
//   } else {
//     navbar.classList.add("top");
//     scrolled = false;
//   }
// };
