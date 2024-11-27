document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos ");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("loggedinUser", username);
        window.location.href = "/pages/page.html";
    } else {
        alert("Usuario o contraseña incorrecta");
    }
});
