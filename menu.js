var linksBar;
var menuIcon;
var navLinks;

// Toggle function for mobile drop-down menu
function menuToggle() {
    navLinks.classList.toggle("active");
};

// Setup
window.onload = function() {
    linksBar = document.getElementById("menu-bar");
    navLinks = linksBar.getElementsByTagName("UL")[0];

    linksBar.onclick = menuToggle;
};