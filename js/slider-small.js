var lrslideIndex = 1;
lrshowSlides(lrslideIndex);

lrAutoSlide = function(){
 // var lrLoop = setInterval(lrshowSlides, 2000);
}

lrAutoSlide();

function lrmoveSlides(n) {
  clearInterval(lrLoop);
  lrshowSlides(lrslideIndex += n);
  setTimeout(lrAutoSlide, 500);
}

function lrcurrentSlide(n) {
  clearInterval(lrLoop);
  lrshowSlides(lrslideIndex = n);
  setTimeout(lrAutoSlide, 500);
}

function lrshowSlides(n) {
  var i;
  var lrslides = document.getElementsByClassName("l-r-slider");
  var lrdots = document.getElementsByClassName("l-r-indicator-box");
  if (n > lrslides.length) {lrslideIndex = 1}
  if (n < 1) {lrslideIndex = lrslides.length}
  for (i = 0; i < lrslides.length; i++) {
      lrslides[i].style.display = "none";
  }
  for (i = 0; i < lrdots.length; i++) {
      lrdots[i].className = lrdots[i].className.replace(" active-iblr", "");
  }
  lrslides[lrslideIndex-1].style.display = "block";
  lrdots[lrslideIndex-1].className += " active-iblr";

  if(lrslideIndex<lrslides.length){
    lrslideIndex++;
  }else{
    lrslideIndex = 1;
  }
}
