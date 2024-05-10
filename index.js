const burgerButton = document.querySelector(".burger-icon");

burgerButton.addEventListener("click", showMenu);
function showMenu() {
  const navbar = document.querySelector(".nav-bar");
  navbar.style.display = "block";
  document.body.style.overflow = "hidden";
}

const closeIcon = document.querySelector(".close-button");
closeIcon.addEventListener("click", hideMenu);

function hideMenu() {
  const navbar = document.querySelector(".nav-bar");
  navbar.style.display = "none";
  document.body.style.overflow = "scroll";
}
