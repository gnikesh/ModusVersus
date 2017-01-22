var lslideIndex = 1;
lshowSlides(lslideIndex);

function lmoveSlides(n) {
  lshowSlides(lslideIndex += n);
}

function lcurrentSlide(n) {
  lshowSlides(lslideIndex = n);
}

function lshowSlides(n) {
  var j;
  var lslides = document.getElementsByClassName("lw-slider");
  var ldots = document.getElementsByClassName("l-indicator-box");
  if (n > lslides.length) {lslideIndex = 1}
  if (n < 1) {lslideIndex = lslides.length}
  for (j = 0; j < lslides.length; j++) {
      lslides[j].style.display = "none";
  }
  for (j = 0; j < ldots.length; j++) {
      ldots[j].className = ldots[j].className.replace(" active-lib", "");
  }
  lslides[lslideIndex-1].style.display = "block";
  ldots[lslideIndex-1].className += " active-lib";
}
