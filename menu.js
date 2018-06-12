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
    menuLink = linksBar.getElementsByTagName("A")[0];
    navLinks = linksBar.getElementsByTagName("UL")[0];

    menuLink.onclick = menuToggle;
};