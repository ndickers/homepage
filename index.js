const burgerButton = document.querySelector(".burger-icon");

burgerButton.addEventListener("click", showMenu);
function showMenu() {
  const navbar = document.querySelector(".the-nav-bar");
  navbar.classList.remove("nav-remove")
  navbar.classList.add("nav-bar");
  document.body.style.overflow = "hidden";
}

const closeIcon = document.querySelector(".close-button");
closeIcon.addEventListener("click", hideMenu);

function hideMenu() {
  const navbar = document.querySelector(".the-nav-bar");
  navbar.classList.add("nav-remove")
  document.body.style.overflow = "scroll";
}
