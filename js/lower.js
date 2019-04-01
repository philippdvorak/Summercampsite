var myIndex = 0; //index for hero slideshow (carousel)
carousel();


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

/* Code for Title Scroll Effect */
const heroTitle = document.querySelector('.heroText')

const mutate = (pct) => {
  heroTitle.style.setProperty('--moveY', `${(1 - pct) * (1 - pct) * 80}vh`);
  heroTitle.style.setProperty('--scale', `${(pct / 2 + 0.5)}`);
};

var scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  console.log(1 - scroll_pos / window.innerHeight);
  mutate(1 - scroll_pos / window.innerHeight);
}

window.addEventListener('scroll', function() {
  scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
//

/* Modal Contact Box */
var modal = document.getElementById('contact-modal');
var btn = document.getElementById("openContact");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
