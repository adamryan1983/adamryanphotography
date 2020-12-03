/****************************/
/*Responsive Hamburger Menu */
/****************************/

function navToggle() {
  let btn = document.getElementById('menuBtn');
  let nav = document.getElementById('menu');

  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
}

const nav = document.getElementById('site-menu');
const header = document.getElementById('top');
const backTop = document.getElementById('topBtn')

/*********************** */
/* Modal Javascript code */
/*********************** */

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
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

/***************/
/*Hide R-click */
/***************/
document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
      // alert("Saving images disabled")
  }
}, false);

/*******************/
/*Lazy Load Images */
/*******************/
// Get all of the images that are marked up to lazy load
const images = document.querySelectorAll('#js-lazy-image');
const config = {
// If the image gets within 50px in the Y axis, start the download.
rootMargin: '50px 0px',
threshold: 0.01
};

// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config);
images.forEach(image => {
  observer.observe(image);
});

//When image in viewport, load it
function onIntersection(entries) {
// Loop through the entries
entries.forEach(entry => {
  // Are we in viewport?
  if (entry.intersectionRatio > 0) {

    // Stop watching and load the image
    observer.unobserve(entry.target);
    preloadImage(entry.target);
  }
});
}

// If we don't have support for intersection observer, load the images immediately
if (!('IntersectionObserver' in window)) {
Array.from(images).forEach(image => preloadImage(image));
} else {
// It is supported, load the images
observer = new IntersectionObserver(onIntersection, config);
images.forEach(image => {

 observer.observe(image);
});
}

/**************/
/*Grid Masonry*/
/**************/

var grid = document.querySelector('.grid');
var msnry;

imagesLoaded( grid, function() {
// init Isotope after all images have loaded
msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
});

/* Check the form on contact to make sure email is correct format */


