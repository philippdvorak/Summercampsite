var myIndex = 0; //index for hero slideshow (carousel)
carousel();
addHeroText();

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

function addHeroText() {
  $(".heroImage").append(
    '<div class="heroText"><h1>Summercamp 2019</h1><h3>4 Wochen 4 Standorte</h3></div>'
  );
}
