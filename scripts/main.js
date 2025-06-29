// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  body.classList.remove('light-theme', 'dark-theme');
  body.classList.add(theme + '-theme');
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Load theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
  setTheme(newTheme);
});

// Fade-in animation on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('section, .project-card');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('fade-in');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Typing animation for navbar
const typingLogo = document.getElementById('typing-logo');
const LogoTitle = 'Portfolio';
let typingLogoIndex = 0;
function typeLogoTitle() {
  if (typingLogo) {
    if (typingLogoIndex <= LogoTitle.length) {
        typingLogo.textContent = LogoTitle.slice(0, typingLogoIndex);
      typingLogoIndex++;
      setTimeout(typeLogoTitle, 90);
    }
  }
}
window.addEventListener('DOMContentLoaded', typeLogoTitle);

// Typing animation for hero job title
const typingText = document.getElementById('typing-text');
const jobTitle = 'Fullstack Developer';
let typingTextIndex = 0;
function typeJobTitle() {
  if (typingText) {
    if (typingTextIndex <= jobTitle.length) {
      typingText.textContent = jobTitle.slice(0, typingTextIndex);
      typingTextIndex++;
      setTimeout(typeJobTitle, 90);
    }
  }
}
window.addEventListener('DOMContentLoaded', typeJobTitle);

// Simple slider for project cards (home page)
function initProjectSlider() {
  const slider = document.querySelector('.projects .project-cards');
  if (!slider) return;
  let isDown = false;
  let startX, scrollLeft;
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
  // Touch support
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('touchend', () => {
    isDown = false;
  });
  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
}
window.addEventListener('DOMContentLoaded', initProjectSlider);

// Project gallery slider (project detail page)
function initGallerySlider() {
  const gallery = document.querySelector('.project-gallery');
  if (!gallery) return;
  let isDown = false;
  let startX, scrollLeft;
  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('active');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });
  gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('active');
  });
  gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('active');
  });
  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 1.5;
    gallery.scrollLeft = scrollLeft - walk;
  });
  // Touch support
  gallery.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });
  gallery.addEventListener('touchend', () => {
    isDown = false;
  });
  gallery.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - gallery.offsetLeft;
    const walk = (x - startX) * 1.5;
    gallery.scrollLeft = scrollLeft - walk;
  });
}
window.addEventListener('DOMContentLoaded', initGallerySlider); 