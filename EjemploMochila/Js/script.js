document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > navbar.offsetTop) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });
});
