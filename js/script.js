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