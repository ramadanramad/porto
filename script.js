/* --- Burger menu --- */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');       // animasi “X”
});

navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  })
);

/* --- Scroll‑reveal animasi modern --- */
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('active');
        obs.unobserve(entry.target);         // jalan sekali, hemat perf.
      }
    });
  },
  { threshold: 0.2 }                         // 20% elemen tampak
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* (opsional) pulse animasi pada tombol download CV */
const cvBtn = document.querySelector('.download-btn');
if (cvBtn){
  cvBtn.addEventListener('mouseenter', () => cvBtn.classList.add('pulse'));
  cvBtn.addEventListener('animationend', () => cvBtn.classList.remove('pulse'));
}

