const navBar = document.querySelector(".navbar");
const menuToggler = document.querySelector(".menu__toggler");
const navBarMenu = document.querySelector(".navbar-menu");
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
});

menuToggler.addEventListener("click", function () {
  if (navBarMenu.classList.contains("mobile-menu")) {
    navBarMenu.classList.remove("mobile-menu");
    menuToggler.classList.remove("menu-toggler-x");
  } else {
    navBarMenu.classList.add("mobile-menu");
    menuToggler.classList.add("menu-toggler-x");
  }
});

/* } */
