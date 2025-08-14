// menu mobile
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// scrollspy (destaca link ativo)
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.nav-link[href="${id}"]`);
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  },
  { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
);
sections.forEach(sec => observer.observe(sec));

// animação suave de entrada (reveal)
const revealTargets = document.querySelectorAll(
  '.about-card, .skill-col, .project-card, .contact-card, .hero-text, .hero-photo'
);
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'transform .7s ease, opacity .7s ease';
        e.target.style.transform = 'translateY(0px)';
        e.target.style.opacity = '1';
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 }
);
revealTargets.forEach(el => {
  el.style.transform = 'translateY(16px)';
  el.style.opacity = '0';
  revealObserver.observe(el);
});
