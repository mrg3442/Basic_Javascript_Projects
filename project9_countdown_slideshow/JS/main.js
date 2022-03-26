let slideIndex = 0;
showSlides();


function showSlides() {

  function countdown() {
    var seconds = 6;
    
    function tick() {
      seconds = seconds -1;
      timer.innerHTML = seconds;
      var time = setTimeout(tick, 1000)
      if (seconds == -1) {
        clearTimeout(time);
        timer.innerHTML = "";
      }
    }
    tick();
  }
  countdown();

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

