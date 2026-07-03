document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initTypingWindow();
  initMarqueeDuplicate();
  initCopyButtons();
});
 
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const tabs = document.querySelector('.tabs');
  if (!toggle || !tabs) return;
  toggle.addEventListener('click', () => {
    tabs.classList.toggle('open');
    toggle.setAttribute('aria-expanded', tabs.classList.contains('open'));
  });
}
 
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
 
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
 
  items.forEach(el => observer.observe(el));
}