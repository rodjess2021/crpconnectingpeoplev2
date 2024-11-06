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

// Inicializar ScrollReveal y configurar los efectos
ScrollReveal().reveal('.slide-in-left', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.slide-in-right', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  delay: 200,
  reset: false
});