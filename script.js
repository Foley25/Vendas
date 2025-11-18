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
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please complete all fields.';
        return;
      }
      const submitBtn = form.querySelector('button[type="submit"]');
      try {
        if (submitBtn) submitBtn.disabled = true;
        status.textContent = 'Sending...';
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        if (!res.ok) {
          const text = await res.text();
          status.textContent = 'Error sending message.';
          console.error('Contact error:', res.status, text);
          return;
        }
        const data = await res.json();
        status.textContent = data.message || 'Thanks — your message was received.';
        form.reset();
      } catch (err) {
        console.error(err);
        status.textContent = 'Network error. Please try again later.';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
});