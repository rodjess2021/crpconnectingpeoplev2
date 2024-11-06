console.log("script.js cargado");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Ajusta según la altura de tu navbar
      const offsetPosition = targetElement.offsetTop - 80; // Puedes ajustar el 80 si es necesario

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

      // Espera la transición antes de ocultar el elemento completamente
      setTimeout(() => {
          splashScreen.style.display = 'none';
          // Inicializar ScrollReveal después de que desaparezca el splash screen
          applyScrollReveal();
      }, 500); // Debe coincidir con la duración de la transición
  }, 2000); // Tiempo que el splash screen estará visible (2 segundos)
});

// Función para verificar si un elemento está en el viewport
function applyScrollReveal() {
  // Configuración general de ScrollReveal para los efectos de deslizamiento
  const baseConfig = {
    distance: window.matchMedia("(max-width: 767px)").matches ? '30px' : '50px',
    duration: 800,
    delay: 200,
    reset: true
  };

  // Efectos para subtítulos y párrafos en "Nuestros valores"
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

  // Efectos para otros elementos de la página
  const scrollRevealConfigLeft = {
    origin: 'left',
    distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: true
  };

  const scrollRevealConfigRight = {
    origin: 'right',
    distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: true
  };

  ScrollReveal().reveal('.slide-in-left', scrollRevealConfigLeft);
  ScrollReveal().reveal('.slide-in-right', scrollRevealConfigRight);

  // Sección "¿Te gustaría formar parte de nuestro equipo?"
  ScrollReveal().reveal('.team-section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
  });

  ScrollReveal().reveal('.team-section-paragraph', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: true
  });

  // Sección "Contáctanos"
  ScrollReveal().reveal('.contact-title', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 200,
    reset: true
  });

  ScrollReveal().reveal('.contact-paragraph', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 400,
    reset: true
  });

  ScrollReveal().reveal('.contact-form', {
    origin: 'right',
    distance: '70px',
    duration: 1000,
    delay: 600,
    reset: true
  });
}

window.addEventListener('resize', applyScrollReveal); // Volver a aplicar las configuraciones al cambiar el tamaño