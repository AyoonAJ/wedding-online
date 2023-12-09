// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu clicked
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  // ketika click tidak kembali ke home section trus
  e.preventDefault();
};

// toggle search form active
const navbarSearchForm = document.querySelector(".search-form");
// toggle otomatis bisa langsung typing pencarian
const searchBox = document.querySelector("#search-box");

// ketika serach button clicked
document.querySelector("#search-button").onclick = (e) => {
  navbarSearchForm.classList.toggle("active");
  // toggle otomatis bisa langsung typing pencarian
  searchBox.focus();

  // ketika click search menu, tidak kembali ke home section trus
  e.preventDefault();
};

// hamburger menu
// klik diluar sidebar(class active) untuk menghilangkan active sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // selama yang di click adalah bukan hamburger meu dan bukan navbar, maka sidebar akan di remove
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// search form
// klik diluar sidebar(class active) untuk menghilangkan active sidebar
const searchForm = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  // selama yang di click adalah bukan hamburger meu dan bukan navbar, maka sidebar akan di remove
  if (!searchForm.contains(e.target) && !navbarSearchForm.contains(e.target)) {
    navbarSearchForm.classList.remove("active");
  }
});
