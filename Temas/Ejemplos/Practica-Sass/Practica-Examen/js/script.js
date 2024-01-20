document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("btn-menu");
  var separateDiv1 = document.querySelector(".separate-div-1");

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      separateDiv1.style.transform = "translatex(240px)";
    } else {
      separateDiv1.style.transform = "translatex(0)";
    }
  });
});
