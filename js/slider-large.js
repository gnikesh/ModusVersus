var slideIndex = 1;
showSlides(slideIndex);

autoSlide = function(){
  this.loop = setInterval(showSlides, 5000);
}

autoSlide();

function moveSlides(n) {
  clearInterval(this.loop);
  showSlides(slideIndex += n);
  setTimeout(autoSlide, 2000);

}

function currentSlide(n) {
  clearInterval(this.loop);
  showSlides(slideIndex = n);
  setTimeout(autoSlide, 2000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("up-slider");
  var dots = document.getElementsByClassName("indicator-box");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-ib", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-ib";

  if (slideIndex < slides.length){
    slideIndex++;
  }else{
    slideIndex = 1;
  }
 
}
