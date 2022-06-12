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
