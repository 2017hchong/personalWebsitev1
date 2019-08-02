function openModal(name) {
  document.getElementById(name).style.display = "block";
  document.getElementById("portfolioNav").style.display = "none";

}

function closeModal(name) {
  document.getElementById(name).style.display = "none";
  document.getElementById("portfolioNav").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(name, n) {
  slideIndex += n;
  showSlides(name);
}

function currentSlide(name, n) {
  slideIndex = n;
  showSlides(name);
}

function showSlides(name) {
  var i;
  var slides = document.getElementsByClassName(name);
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

