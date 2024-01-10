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

document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;

  const addToCartButtons = document.querySelectorAll(".btn-light");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartCount++;

      document.getElementById("cart-count").innerText = `(${cartCount})`;
    });
  });
});
