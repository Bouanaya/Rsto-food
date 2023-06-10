document.getElementById("Scrol1").innerHTML = "<";
document.getElementById("Scrol2").innerHTML = ">";
document.getElementById("Scrol3").innerHTML = "<";
document.getElementById("Scrol4").innerHTML = ">";

// // Get the button element
// var button = document.getElementById("scroll-button");

// // Add an event listener to the button
// button.addEventListener("click", function() {
//   // Scroll to the top of the page
//   window.scrollTo({top: 0, behavior: "smooth"});
// });
var scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

const menuBurgurre = document.querySelector(".Icon");
const navlink = document.querySelector(".navl");
const Navlo = document.querySelector(".Nav");

menuBurgurre.addEventListener("click", () => {
  navlink.classList.toggle("Hidden");
});
menuBurgurre.addEventListener("click", () => {
  Navlo.classList.toggle("Nino");
});
    
 