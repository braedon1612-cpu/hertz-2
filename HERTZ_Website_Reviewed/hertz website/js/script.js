const header = document.querySelector('header');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => header.classList.toggle('sticky', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const navLinks = document.querySelectorAll('nav a');
const sections = [...document.querySelectorAll('section[id]')];
const updateNavigation = () => {
  let activeId = 'home';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) activeId = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`));
};
updateNavigation();
window.addEventListener('scroll', updateNavigation, { passive: true });

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll('.section-heading, .about-image, .about-content, .director-photo, .director-content, .why-card, .service-card, .industry-card, .gallery-item, .info-card, .contact-form, .map-container');
  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 55, 220)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}
