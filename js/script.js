console.log("script.js cargado");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    splashScreen.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
      splashScreen.style.display = 'none';
      applyScrollReveal(); 
    }, 500); 
  }, 2000); 
});

function applyScrollReveal() {
  const baseConfig = {
    distance: window.matchMedia("(max-width: 767px)").matches ? '30px' : '50px',
    duration: 800,
    delay: 200,
    reset: false  // Cambiado a false para dispositivos móviles
  };

  ScrollReveal().reveal('.value-title', {
    ...baseConfig,
    origin: 'top',
    delay: 300,
  });

  ScrollReveal().reveal('.value-paragraph', {
    ...baseConfig,
    origin: 'bottom',
    delay: 400,
  });

  const scrollRevealConfigLeft = {
    origin: 'left',
    distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: false // Cambiado a false
  };

  const scrollRevealConfigRight = {
    origin: 'right',
    distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: false // Cambiado a false
  };

  ScrollReveal().reveal('.slide-in-left', scrollRevealConfigLeft);
  ScrollReveal().reveal('.slide-in-right', scrollRevealConfigRight);

  ScrollReveal().reveal('.team-section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
  });

  ScrollReveal().reveal('.team-section-paragraph', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: false
  });

  ScrollReveal().reveal('.contact-title', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 200,
    reset: false
  });

  ScrollReveal().reveal('.contact-paragraph', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 400,
    reset: false
  });

  ScrollReveal().reveal('.contact-form', {
    origin: 'right',
    distance: '70px',
    duration: 1000,
    delay: 600,
    reset: false
  });
}

window.addEventListener('resize', applyScrollReveal);