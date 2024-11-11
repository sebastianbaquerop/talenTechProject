document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact component loaded");

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado");
        // Lógica adicional para enviar el formulario
    });
});
