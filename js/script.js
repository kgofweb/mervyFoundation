// DOM elements
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const bannerLink = document.querySelectorAll('.banner-link');

// Event Listener
navToggle.addEventListener('click', showMenu);
navClose.addEventListener('click', closeMenu);
bannerLink.forEach(bL => bL.addEventListener('click', setActiveLink));

function showMenu() {
  navMenu.classList.add('show');
}

function closeMenu() {
  navMenu.classList.remove('show');
}

function setActiveLink(e) {
  e.preventDefault();
  
  bannerLink.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
}
