// Verificar si el usuario ha iniciado sesión
const loggedinUser = localStorage.getItem("loggedinUser");
if (!loggedinUser) {
    alert("Primero inicia sesión");
    window.location.href = "../../index.html";
}


// Función de cierre de sesión
document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedinUser");
    window.location.href = "../../index.html";
});


// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Activar animaciones de entrada cuando el usuario haga scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');  // Añadimos la clase 'visible' cuando se hace scroll
        }
    });
});

// Llamada inicial para animar los elementos al cargar
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación simple
    if (!nombre || !email || !telefono || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor ingresa un correo válido.");
        return;
    }

    // Validar teléfono (solo números)
    if (!/^\d{10}$/.test(telefono)) {
        alert("Por favor ingresa un teléfono válido.");
        return;
    }

    // Si todo es correcto, mostramos un mensaje de éxito
    alert("¡Formulario enviado exitosamente!");
});


