const btns = document.querySelectorAll(".search__link");

btns.addEventListener("click", function (evt, tabName) {
  // Declare all variables
  let i;
  let tabContent;
  let search__link;

  // Get all elements with class="tabcontent" and hide them
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="search__link" and remove the class "active"

  search__link = document.getElementsByClassName("search__link");
  for (i = 0; i < search__link.length; i++) {
    search__link[i].className = search__link[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
});
