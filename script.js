// Minimal JS for menu toggle and fake contact form handling
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    const visible = siteNav.style.display === 'block';
    siteNav.style.display = visible ? 'none' : 'block';
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (client-side only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please complete all fields.';
        return;
      }
      // Replace this with real backend or service integration (Formspree, Netlify Forms, etc.)
      status.textContent = 'Thanks — your message was received (demo).';
      form.reset();
    });
  }
});