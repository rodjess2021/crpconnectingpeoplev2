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
      }, 500); // Debe coincidir con la duración de la transición
  }, 2000); // Tiempo que el splash screen estará visible (2 segundos)
});

// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Configuración para elementos que deslizan desde la izquierda
function applyScrollReveal() {
  const scrollRevealConfigLeft = {
      origin: 'left',
      distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px', // Reducir la distancia en móviles
      duration: 800,
      delay: 200,
      reset: true // Para asegurarse de que el efecto se vea cada vez que se desliza
  };

  const scrollRevealConfigRight = {
      origin: 'right',
      distance: window.matchMedia("(max-width: 767px)").matches ? '50px' : '100px', // Reducir la distancia en móviles
      duration: 800,
      delay: 200,
      reset: true
  };

  ScrollReveal().reveal('.slide-in-left', scrollRevealConfigLeft);
  ScrollReveal().reveal('.slide-in-right', scrollRevealConfigRight);
}

applyScrollReveal();

// Configurar ScrollReveal para la sección "¿Te gustaría formar parte de nuestro equipo?"
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

// Configurar ScrollReveal para la sección "Contáctanos"
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

window.addEventListener('resize', applyScrollReveal); // Volver a aplicar las configuraciones al cambiar el tamaño