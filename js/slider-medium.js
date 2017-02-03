var lslideIndex = 1;
lshowSlides(lslideIndex);

lAutoSlide = function(){
  //this.lLoop = setInterval(lshowSlides, 3000);
}

lAutoSlide();

function lmoveSlides(n) {
  clearInterval(this.lLoop);
  lshowSlides(lslideIndex += n);
  setTimeout(lAutoSlide, 1000);
}

function lcurrentSlide(n) {
  clearInterval(this.lLoop);
  lshowSlides(lslideIndex = n);
  setTimeout(lAutoSlide, 1000);
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

  if (lslideIndex < lslides.length){
    lslideIndex++;
  }else{
    lslideIndex = 1;
  }
}
