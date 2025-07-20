document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
  });
  