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

// Front-end estimate form behavior only.
// TODO: Replace this handler with your real form submission integration.
const estimateForm = document.querySelector('#estimate-form');
const formMessage = document.querySelector('#form-message');
if (estimateForm && formMessage) {
  estimateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!estimateForm.checkValidity()) {
      estimateForm.reportValidity();
      formMessage.className = 'form-message error show';
      formMessage.textContent = 'Please complete the required fields before sending your request.';
      return;
    }

    formMessage.className = 'form-message info show';
    formMessage.textContent = 'The form is ready for a submission provider. Connect your backend or form endpoint here before publishing.';
  });
}
