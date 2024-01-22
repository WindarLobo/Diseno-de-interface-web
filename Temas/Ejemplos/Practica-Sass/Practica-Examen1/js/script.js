document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("btn-menu");
  var separateDiv1 = document.querySelector(".separate-div-1");
  var separateDiv2 = document.querySelector(".separate-div-2");
  var separateDiv3 = document.querySelector(".separate-div-3");
  var separateDiv4 = document.querySelector(".separate-div-4");
  var separateDiv5 = document.querySelector(".separate-div-5");
  var separateDiv6 = document.querySelector(".separate-div-6");
  var separateDiv7 = document.querySelector(".separate-div-7");

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      separateDiv1.style.transform = "translatex(85%)";
      separateDiv2.style.transform = "translatex(260px)";
      separateDiv3.style.transform = "translatex(260px)";
      separateDiv4.style.transform = "translatex(260px)";
      separateDiv5.style.transform = "translatex(260px)";
      separateDiv6.style.transform = "translatex(260px)";
      separateDiv7.style.transform = "translatex(38%)";
    } else {
      separateDiv1.style.transform = "translatex(0)";
      separateDiv2.style.transform = "translatex(0)";
      separateDiv3.style.transform = "translatex(0)";
      separateDiv4.style.transform = "translatex(0)";
      separateDiv5.style.transform = "translatex(0)";
      separateDiv6.style.transform = "translatex(0)";
      separateDiv7.style.transform = "translatex(0)";
    }
  });
});
