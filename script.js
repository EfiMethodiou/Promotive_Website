//flag functions

function gotoEng() {
  window.location.href = "en/grammenos_trucks.html";
}

function gotoGr() {
  window.location.href = "../index.html";
}
/*PRELOAD SLIDER IMAGES */
var image1 = new Image();
var image2  = new Image();
var image3  = new Image();
image1.src = "img/slider1gr.png";
image2.src =  "img/slider2gr.png";
image3.src =  "img/slider3gr.png";


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

function closeGallery() {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "none";
  img7.style.display = "none";
  img8.style.display = "none";
  document.getElementById("galBackgr").style.display = "none";
  document.getElementById("animMessages").style.display = "block";  
  document.getElementById("footer").style.display = "block"; 
}

function enlargeImg1() {
  img1.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";
  document.getElementById("footer").style.display = "none";
}
function enlargeImg2() {
  img2.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none"; 
  document.getElementById("footer").style.display = "none";  
}
function enlargeImg3() {
  img3.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";
  document.getElementById("footer").style.display = "none";
}
function enlargeImg4() {
  img4.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";  
  document.getElementById("footer").style.display = "none";
}
function enlargeImg5() {
  img5.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";
  document.getElementById("footer").style.display = "none";
}
function enlargeImg6() {
  img6.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";
  document.getElementById("footer").style.display = "none"; 
}
function enlargeImg7() {
  img7.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none"; 
  document.getElementById("footer").style.display = "none"; 
}

function enlargeImg8() {
  img8.style.display = "block";
  document.getElementById("galBackgr").style.display = "block";
  document.getElementById("animMessages").style.display = "none";
  document.getElementById("footer").style.display = "none";
}

/*
4 SECTION MESSAGES ANIMATION
*/

document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('.animMessages-wrapper > div').offsetTop;

   if (isVisible) {
    const observer = new IntersectionObserver(entries => {
      console.log("hello");
      entries.forEach(entry => {
        const square = entry.target.querySelector('.animMessages');
    
        if (entry.isIntersecting) {
          square.classList.add('animMessages-animation');
        return; // if we added the class, exit the function
        }    
        // We're not intersecting, so remove the class!
        square.classList.remove('animMessages-animation');
      });
    });
    
    observer.observe(document.querySelector('.animMessages-wrapper'));
   }
});
