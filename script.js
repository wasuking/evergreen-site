// Shared mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Current year in footer
for (const year of document.querySelectorAll('[data-year]')) {
  year.textContent = new Date().getFullYear();
}