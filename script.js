const links = document.querySelectorAll('nav a');

window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* reveal animation */
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 120) {
      el.classList.add('active');
    }
  });
});

window.addEventListener('scroll', () => {
  document.querySelector('nav')
    .classList.toggle('scrolled', window.scrollY > 50);
});