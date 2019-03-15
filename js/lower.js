var myIndex = 0; //index for hero slideshow (carousel)
carousel();

$(document).scroll(function() {
  $(".heroText").css("opacity", "0");
});

function carousel() {
  var i;
  var x = document.getElementsByClassName("heroImage");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}

  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2500);
}
