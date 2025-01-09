/******** Helper Functions ********/
// Helper function to set styles
function setStyles(elementId, styles) {
  const element = document.getElementById(elementId);
  Object.assign(element.style, styles);
}

// Helper function to set animations
function setAnimation(elementId, animation) {
  document.getElementById(elementId).style.animation = animation;
}




/********  Main Functions ********/
// Open and close left nav bar
function openNav() {
  setStyles("mySidenav", { width: "250px" });
  setStyles("main", { marginLeft: "250px" });
}

function closeNav() {
  setStyles("mySidenav", { width: "0" });
  setStyles("main", { marginLeft: "0" });
}

// Open and close contact page
function openContact() {
  setAnimation("CONTACT", "slideUp 0.8s ease-in-out forwards");
  setStyles("CONTACT", { width: "100%", height: "100%" });
}

function contactBackToHome() {
  setAnimation("CONTACT", "slideDown 0.8s ease-in-out forwards");
}

// Start presentation
function aboutMe() {
  setAnimation("aboutMe", "slideRight 0.8s ease-in-out forwards");
  setStyles("aboutMe", { width: "30%", height: "100%" });

  setAnimation("aboutMe2", "slideLeft 0.8s ease-in-out forwards");
  setStyles("aboutMe2", { width: "70%", height: "100%" });
}

// //invert colors button
// function invertColors() {
//   document.body.classList.toggle('invert');
// }

//scroll to designated page
function scrollToPage(elementId) {
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
}

function scrollToHome() {
  document.body.scrollIntoView({ behavior: "smooth" });
}