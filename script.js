//flag functions

function gotoEng() {
  window.location.href = "en/grammenos_trucks.html";
}

function gotoGr() {
  window.location.href = "../index.html";
}

/*HOME SLIDER GALLERY*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


/*SECOND GALLERY */

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");

function closeGallery(){
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none"; 
  img6.style.display = "none";
  img7.style.display = "none";
  img8.style.display = "none";
  document.getElementById("galBackgr").style.display = "none";
  document.getElementById("animMessages").style.marginTop = "50vw";
}


function enlargeImg1() { 
    img1.style.display = "block";     
    document.getElementById("galBackgr").style.display = "block"; 
    document.getElementById("animMessages").style.marginTop = "65vw";
}
function enlargeImg2() { 
    img2.style.display = "block";      
    document.getElementById("galBackgr").style.display = "block"; 
    document.getElementById("animMessages").style.marginTop = "55vw";
}
function enlargeImg3() { 
  img3.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "55vw";
}
function enlargeImg4() { 
  img4.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "55vw";
}
function enlargeImg5() {      
  img5.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "65vw";
}
function enlargeImg6() {   
  img6.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "65vw";
}
function enlargeImg7() {   
  img7.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "65vw";
}

function enlargeImg8() {    
  img8.style.display = "block";     
  document.getElementById("galBackgr").style.display = "block"; 
  document.getElementById("animMessages").style.marginTop = "55vw";
}


