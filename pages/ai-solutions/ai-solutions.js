document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const cards = document.querySelectorAll(".carousel-card");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const infoDynamic = document.getElementById("info-dinamica");
    const infoTitle = document.getElementById("info-title");
    const infoContent = document.getElementById("info-content");

    let currentIndex = 0;
    const updateCardWidth = () => {
        // Calcular el ancho de las tarjetas de acuerdo al tamaño de pantalla
        const cardWidth = cards[0].offsetWidth + 20; // Añadir el margen
        return cardWidth;
    };

    // Información extra por índice
    const infoData = [
        {
            title: "Automatización Inteligente",
            content: "Profundizamos en cómo los sistemas inteligentes pueden ahorrar tiempo y dinero mediante procesos completamente automatizados y efectivos."
        },
        {
            title: "Análisis de Datos y Predicciones",
            content: "Descubre cómo obtener valor de tus datos mediante análisis avanzados y predicciones precisas para tomar decisiones fundamentadas."
        },
        {
            title: "Reconocimiento de Imágenes",
            content: "Aplicaciones de IA para detección de objetos, sistemas de seguridad avanzados y diagnósticos médicos más precisos."
        },
        {
            title: "Procesamiento del Lenguaje Natural (NLP)",
            content: "Conoce cómo nuestras soluciones NLP pueden transformar la interacción humano-máquina y mejorar la experiencia del usuario."
        },
        {
            title: "Personalización y Recomendaciones",
            content: "Implementamos algoritmos de recomendación personalizados para mejorar la conversión y retención de clientes."
        }
    ];

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const cardWidth = updateCardWidth(); // Obtener el ancho de la tarjeta actualizado
        const offset = -currentIndex * cardWidth;
        carouselContainer.style.transform = `translateX(${offset}px)`;
        // Mostrar/ocultar botones de navegación
        updateNavigationButtons();
    }

    // Función para actualizar la visibilidad de los botones prev/next
    function updateNavigationButtons() {
        // Si estamos en el inicio del carrusel, oculta el botón 'prev'
        if (currentIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        // Si estamos en el final del carrusel, oculta el botón 'next'
        if (currentIndex === cards.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }

    // Navegación en el carrusel
    prevButton.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        updateCarousel();
    });

    // Mostrar información adicional al hacer clic en "Más información"
    document.querySelectorAll(".info-button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const { title, content } = infoData[index];
            infoTitle.textContent = title;
            infoContent.textContent = content;

            infoDynamic.classList.remove("info-hidden");
            infoDynamic.classList.add("info-visible");
        });
    });

    // Redirigir al hacer clic en el botón de regreso
    document.getElementById("back-btn").addEventListener("click", () => {
        window.history.back(); // Regresar a la página anterior
    });


    document.getElementById("back-btn-arrow").addEventListener("click", function () {
        window.location.href = "../page.html";
    });

    // Inicializa la visibilidad de los botones de navegación al cargar
    updateNavigationButtons();
});

