// toggke class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar(class active) untuk menghilangkan active sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // selama yang di click adalah bukan hamburger meu dan bukan navbar, maka sidebar akan di remove
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
