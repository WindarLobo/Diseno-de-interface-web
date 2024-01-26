//store width of container in the obj variable
var obj = document.getElementsByClassName("container")[0].scrollWidth;

function goNext() {
  document.getElementsByClassName("container")[0].scrollBy({
    left: obj,
  });
}

function goPrevious() {
  document.getElementsByClassName("container")[0].scrollBy({
    left: -obj,
  });
}
/*We can also use scroll left and scroll right method to achieve the same result as above*/

/*
function goNext() {
  var container = document.getElementsByClassName('container')[0];
  container.scrollLeft += obj;
}

function goPrevious() {
  var container = document.getElementsByClassName('container')[0];
  container.scrollLeft -= obj;
}
*/
