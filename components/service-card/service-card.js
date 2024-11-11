// Función para detectar cuando las tarjetas entran en la vista y añadir la clase 'visible'
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach(card => {
    observer.observe(card);
});
