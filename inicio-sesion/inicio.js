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
