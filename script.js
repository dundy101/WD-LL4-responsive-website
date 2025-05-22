// This script makes the navigation responsive for beginners
// It shows or hides the navigation menu when the hamburger button is clicked

// Wait until the page is fully loaded
window.onload = function() {
  // Get the menu button and the nav element
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');

  // When the menu button is clicked
  menuToggle.onclick = function() {
    // Toggle the 'active' class on the nav
    nav.classList.toggle('active');
  };
};
