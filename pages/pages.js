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

// Función para cargar dinámicamente los servicios desde sus carpetas
async function loadService(serviceName) {
    //const serviceContainer = document.getElementById('pages');
    //const htmlResponse = await fetch(`/pages/${serviceName}/${serviceName}.html`);
    //const cssResponse = await fetch(`/pages/${serviceName}/${serviceName}.css`);
   // const jsResponse = await fetch(`/pages/${serviceName}/${serviceName}.js`);

    const serviceHTML = await htmlResponse.text();
    const serviceCSS = await cssResponse.text();
    const serviceJS = await jsResponse.text();

    // Crear un contenedor para cada servicio
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service');

    // Insertar HTML del servicio
    serviceDiv.innerHTML = serviceHTML;

    // Insertar CSS del servicio
    const style = document.createElement('style');
    style.innerHTML = serviceCSS;
    document.head.appendChild(style);

    // Insertar JS del servicio
    const script = document.createElement('script');
    script.innerHTML = serviceJS;
    document.body.appendChild(script);

    // Agregar el servicio al contenedor de servicios
    serviceContainer.appendChild(serviceDiv);
}

// Cargar todos los servicios
const services = [
    'ai-solutions',
    'cloud-solutions',
    'crm-solutions',
    'digital-transformation',
    'migration-solutions',
    'pos-solutions',
    'fullstack-solutions'
];


document.addEventListener("DOMContentLoaded", function() {
    console.log("Page of Solutions Service content loaded");
    // Lógica específica de los servicios
    services.forEach(service => loadService(service));
});