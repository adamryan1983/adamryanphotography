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

window.addEventListener('scroll', function() {
    if (window.scrollY >=950) { // adjust this value based on site structure and header image height
        backTop.classList.remove('hidden');
    } else {
        backTop.classList.add('hidden');

    }
});

/*************/
/*ScrollMagic*/
/*************/
// init controller
var controller = new ScrollMagic.Controller();
// build scenes
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50,												 // start a little later
    triggerHook: 0.9,
  })
  .setClassToggle(revealElements[i], "visible") // add class toggle
  .addTo(controller);
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