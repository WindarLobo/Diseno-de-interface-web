document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var separateDiv1 = document.querySelector(".separate-div-1");
  var separateDiv2 = document.querySelector(".separate-div-2");
  var separateDiv3 = document.querySelector(".separate-div-3");
  var separateDiv4 = document.querySelector(".separate-div-4");
  var separateDiv5 = document.querySelector(".separate-div-5");

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      separateDiv1.style.transform = "translateY(230px)";
      separateDiv2.style.transform = "translateY(230px)";
      separateDiv3.style.transform = "translateY(230px)";
      separateDiv4.style.transform = "translateY(230px)";
      separateDiv5.style.transform = "translateY(230px)";
    } else {
      separateDiv1.style.transform = "translateY(0)";
      separateDiv2.style.transform = "translateY(0)";
      separateDiv3.style.transform = "translateY(0)";
      separateDiv4.style.transform = "translateY(0)";
      separateDiv5.style.transform = "translateY(0)";
    }
  });
});
